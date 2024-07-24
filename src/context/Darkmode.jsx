import React, { createContext, useState, useEffect, useContext } from 'react';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [isNightMode, setIsNightMode] = useState(
    () => JSON.parse(localStorage.getItem('mode')) ?? true
  );

  const  handleToggle = () => {
    const newMode = !isNightMode;
    setIsNightMode(newMode);
    localStorage.setItem('mode', JSON.stringify(newMode));
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    if (isNightMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isNightMode]);

  return (
    <DarkModeContext.Provider value={{ isNightMode,  handleToggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);