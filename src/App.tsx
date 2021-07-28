import React from 'react';
import WalletProvider from 'contexts/WalletContext';
import TronWalletProvider from 'contexts/TronWalletContext';
import ThemeContextProvider from 'contexts/ThemeContext';
import MainLayoutPage from 'pages/MainLayout';

const App: React.FC = () => {
  return (
    <WalletProvider>
      <TronWalletProvider>
        <ThemeContextProvider>
          <MainLayoutPage />
        </ThemeContextProvider>
      </TronWalletProvider>
    </WalletProvider>
  );
};

export default App;
