import React, { useContext } from 'react';
import { WalletContext } from 'contexts/WalletContext';
import { WalletContextAPI } from 'contexts/types';
import { NetworkInfos } from 'constants/index';
import { NetworkParameter } from 'constants/types';

const useNetworkInfos = () => {
  const { currentNetwork } = useContext<WalletContextAPI | any>(WalletContext);
  const currentNetworkInfo: NetworkParameter | undefined = NetworkInfos.find(
    (network) => network.chainId === currentNetwork
  );
  return currentNetworkInfo;
};

export default useNetworkInfos;
