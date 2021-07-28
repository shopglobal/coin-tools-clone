import { AssetOptions, NetworkParameter } from 'constants/types';

export interface WalletContextAPI {
  web3: any;
  account: string;
  currentNetwork: string;
  error: string;
  handleConnectWallet: () => Promise<void>;
  handleAccount: () => void;
  handleLogoutWallet: () => Promise<void>;
  handleChangeNetwork: (params: NetworkParameter) => Promise<void>;
  handleDetectCurrentNetwork: () => void;
  handleAddWalletToken: (params: AssetOptions) => void;
}

export interface TronWalletContextAPI {
  accountTron: string;
  selectTronNetwork: boolean;
  handleOffTronNetwork: () => void;
  handleChangeTronNetwork: () => void;
}

export interface ThemeContextAPI {
  isDark?: boolean | null;
  toggleTheme: () => void | null;
}

export interface RequestArguments {
  method: string;
  params?: unknown[] | object;
}

export interface ProviderRpcError extends Error {
  message: string;
  code: number;
  data?: any;
}
