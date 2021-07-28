export interface IPagePath {
  HOME: string;
  LIST_TOKENS: string;
}

export interface NativeCurrency {
  name: string;
  symbol: string;
  decimals: number;
}

export interface ChainID {
  BSC: string;
  ETH: string;
  HRC: string;
  FTM: string;
  PRC: string;
  TOMO: string;

  // Testnet
  BSCTEST: string;
  ETHTEST: string;
  HRCTEST: string;
  FTMTEST: string;
  PRCTEST: string;
  TOMOTESET: string;
  LOCAL: string;
}

export interface NetworkParameter {
  chainId: string;
  rpcUrls: string[];
  chainName: string;
  nativeCurrency: NativeCurrency;
  blockExplorerUrls?: string[];
  iconUrls?: string[];
  type?: string;
  label?: string;
  isAvailableForMultiSend?: boolean;
}

export interface AssetOptions {
  address: string;
  symbol: string;
  decimals: number;
  image: string;
}

export interface AssetParams {
  type: 'ERC20';
  options: AssetOptions;
}
