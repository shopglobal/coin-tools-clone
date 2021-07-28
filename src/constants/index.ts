import { NetworkParameter, ChainID, IPagePath } from './types';

export const isDev: boolean = process.env.NODE_ENV === 'development';

export const PAGE_PATHS: IPagePath = {
  HOME: '/',
  LIST_TOKENS: '/list-tokens',
};

export const CHAIN_IDS: ChainID = {
  // Mainnet
  BSC: '0x38',
  ETH: '0x1',
  HRC: '0x80',
  FTM: '0xfa',
  PRC: '0x89',
  TOMO: '0x58',

  // Testnet
  BSCTEST: '0x61',
  ETHTEST: '0x43',
  HRCTEST: '0x100',
  FTMTEST: '0xfa2',
  PRCTEST: '0x13881',
  TOMOTESET: '0x58',
  LOCAL: '0x539',
};

export const NetworkInfos: NetworkParameter[] = [
  {
    chainId: CHAIN_IDS.BSC,
    chainName: 'BSC Smart Chain',
    type: 'BEP20',
    label: 'BSC Smart Chain',
    nativeCurrency: {
      name: 'Binance Coin',
      symbol: 'BNB',
      decimals: 18,
    },
    rpcUrls: ['https://bsc-dataseed.binance.org'],
    blockExplorerUrls: ['https://bscscan.com'],
    iconUrls: [`https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png`],
    isAvailableForMultiSend: true,
  },
  {
    chainId: CHAIN_IDS.ETH,
    chainName: 'Ethereum Mainnet',
    type: 'ERC20',
    label: 'Ethereum Mainnet',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: [''],
    blockExplorerUrls: ['https://etherescan.io'],
    iconUrls: [`https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png`],
  },
  {
    chainId: CHAIN_IDS.HRC,
    chainName: 'Houbi ECO Chain',
    type: 'HRC20',
    label: 'Houbi ECO Chain',
    nativeCurrency: {
      name: 'Huobi',
      symbol: 'HT',
      decimals: 18,
    },
    rpcUrls: ['https://http-mainnet.hecochain.com'],
    blockExplorerUrls: ['https://hecoinfo.com'],
    iconUrls: [`https://s2.coinmarketcap.com/static/img/coins/64x64/2502.png`],
  },
  {
    chainId: CHAIN_IDS.FTM,
    chainName: 'Fantom Mainnet',
    type: 'FRC20',
    label: 'Fantom Mainnet',
    nativeCurrency: {
      name: 'Fantom',
      symbol: 'FTM',
      decimals: 18,
    },
    rpcUrls: ['https://rpcapi.fantom.network'],
    blockExplorerUrls: ['https://ftmscan.com'],
    iconUrls: [`https://s2.coinmarketcap.com/static/img/coins/64x64/3513.png`],
  },
  {
    chainId: CHAIN_IDS.PRC,
    chainName: 'Polygon Mainnet',
    type: 'PRC20',
    label: 'Polygon Mainnet',
    nativeCurrency: {
      name: 'Polygon',
      symbol: 'MATIC',
      decimals: 18,
    },
    rpcUrls: ['https://rpc-mainnet.matic.network'],
    blockExplorerUrls: ['https://polygonscan.com/'],
    iconUrls: [`https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png`],
  },
  {
    chainId: CHAIN_IDS.TOMO,
    chainName: 'TomoChain Mainnet',
    type: 'TRC20',
    label: 'TomoChain Mainnet',
    nativeCurrency: {
      name: 'Tomo',
      symbol: 'TOMO',
      decimals: 18,
    },
    rpcUrls: ['https://rpc.tomochain.com'],
    blockExplorerUrls: ['https://scan.tomochain.com'],
    iconUrls: [`https://s2.coinmarketcap.com/static/img/coins/64x64/2570.png`],
  },
];
