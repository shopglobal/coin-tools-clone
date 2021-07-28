import React, { useState } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { light, dark } from 'theme/index';
import { ThemeContextAPI } from './types';

const CACHE_KEY = 'IS_DARK';

const ThemeContext = React.createContext<ThemeContextAPI>({
  isDark: null,
  toggleTheme: () => null,
});

const ThemeContextProvider: React.FC = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const isDarkUserSetting = localStorage.getItem(CACHE_KEY);
    return isDarkUserSetting ? JSON.parse(isDarkUserSetting) : false;
  });

  const toggleTheme = () => {
    setIsDark((prevState) => {
      localStorage.setItem(CACHE_KEY, JSON.stringify(!prevState));
      return !prevState;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <SCThemeProvider theme={isDark ? dark : light}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
