import React, { createContext, useState, useEffect } from 'react';
import { notification } from 'antd';
import { TronWalletContextAPI } from './types';

export const TronContext = createContext<TronWalletContextAPI | undefined>(undefined);

declare let window: any;

const TronProvider: React.FC = ({ children }) => {
  const [accountTron, setAccountTron] = useState<string>('');
  const [selectTronNetwork, setSelectTronNetwork] = useState<boolean>(false);
  // const handleRedirectLink = (type) => {
  //   push(`/create-token/${type}`);
  // };

  const handleChangeTronNetwork = (): void => {
    setSelectTronNetwork(true);
  };

  const handleOffTronNetwork = (): void => {
    setSelectTronNetwork(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (window?.tronWeb) {
        if (window.tronWeb.defaultAddress.base58) {
          setAccountTron(window?.tronWeb?.defaultAddress?.base58);
        }
      } else {
        notification.error({
          message: 'Please login tronLink extension',
        });
      }
    }, 4000);
    return () => clearTimeout(timeout);
  }, [window?.tronWeb?.defaultAddress?.base58]);

  return (
    <TronContext.Provider
      value={{ accountTron, selectTronNetwork, handleOffTronNetwork, handleChangeTronNetwork }}
    >
      {children}
    </TronContext.Provider>
  );
};

export default TronProvider;
