import React, { createContext, useState, useEffect } from 'react';
import Web3 from 'web3';
import { notification } from 'antd';
import { WalletContextAPI, ProviderRpcError } from './types';
import { NetworkParameter, AssetParams, AssetOptions } from 'constants/types';

export const WalletContext = createContext<WalletContextAPI | undefined>(undefined);

declare let window: any;

const WalletProvider: React.FC = ({ children }) => {
  const [web3, setWeb3] = useState<any>(null);
  const [account, setAccount] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [currentNetwork, setCurrentNetwork] = useState<string>(web3?.eth?.currentProvider?.chainId);

  const handleConnectWallet = async (): Promise<void> => {
    if (window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      await window.ethereum
        .request({ method: 'eth_accounts' })
        .then((newAccount: string[]) => {
          setAccount(newAccount[0]);
        })
        .catch((err: any) => {
          notification.error({
            message: err.message,
          });
        });
      window.web3 = new Web3(window.ethereum);
      setWeb3(window.web3);
    } else {
      notification.error({
        message: 'Please install metamask extension',
      });
      setError('Please install metamask extension');
    }
  };

  const handleChangeNetwork = async ({
    chainId,
    rpcUrls,
    chainName,
    nativeCurrency,
    blockExplorerUrls,
    iconUrls,
  }: NetworkParameter): Promise<void> => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId }],
        });
      } catch (switchError) {
        let err: any = switchError;
        // This error code indicates that the chain has not been added to MetaMask.
        if (err.code === 4902) {
          try {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainId,
                  rpcUrls,
                  chainName,
                  nativeCurrency,
                  blockExplorerUrls,
                  iconUrls /* ... */,
                },
              ],
            });
          } catch (addError) {
            // handle "add" error
            let err: any = addError;
            notification.error({
              message: err.message,
            });
          }
        }
        // handle other "switch" errors
      }
    }
  };

  const handleDetectCurrentNetwork = (): void => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: 'eth_chainId' })
        .then((chainId: string) => {
          setCurrentNetwork(chainId);
        })
        .catch((err: ProviderRpcError) => {
          notification.error({
            message: err.message,
          });
        });

      window.ethereum.on('chainChanged', (chainId: string) => {
        setCurrentNetwork(chainId);
      });

      window.ethereum.autoRefreshOnNetworkChange = false;
    }
  };

  const handleAccount = (): void => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: 'eth_accounts' })
        .then((newAccount: string[]) => {
          setAccount(newAccount[0]);
        })
        .catch((err: ProviderRpcError) => {
          notification.error({
            message: err.message,
          });
        });
    }
  };

  const onChangeAccount = (): void => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        if (accounts.length === 0) {
          // MetaMask is locked or the user has not connected any accounts
          notification.error({
            message: 'Please connect to MetaMask.',
          });
        } else if (accounts[0] !== account) {
          setAccount(accounts[0]);
          // Do any other work!
        }
      });
    }
  };

  const handleLogoutWallet = async (): Promise<void> => {
    if (web3) {
      setAccount('');
      await window.ethereum.request({
        method: 'wallet_requestPermissions',
        params: [
          {
            eth_accounts: {},
          },
        ],
      });
      await handleAccount();
    }
  };

  const handleAddWalletToken = ({
    address,
    symbol,
    decimals = 18,
    image = 'https://poolswap.ai/images/logo/color/icon100x100.png',
  }: AssetOptions): void => {
    if (window.ethereum) {
      window.ethereum
        .request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20',
            options: {
              address,
              symbol,
              decimals,
              image,
            },
          },
        })
        .then((success: AssetParams) => {
          if (success) {
            notification.success({
              message: 'Add token in wallet successfully',
            });
          }
        })
        .catch((err: ProviderRpcError) => {
          notification.error({
            message: err.message,
          });
        });
    }
  };

  useEffect(() => {
    handleConnectWallet();
    handleAccount();
    onChangeAccount();
    handleDetectCurrentNetwork();
  }, []);

  return (
    <WalletContext.Provider
      value={{
        web3,
        account,
        currentNetwork,
        error,
        handleConnectWallet,
        handleAccount,
        handleLogoutWallet,
        handleChangeNetwork,
        handleDetectCurrentNetwork,
        handleAddWalletToken,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export default WalletProvider;
