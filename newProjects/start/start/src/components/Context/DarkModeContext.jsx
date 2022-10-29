import { createContext, useState } from 'react';

export const DarkModeContext = createContext();

// 우산 컴포넌트
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((mode) => !mode);
  }

  return (
    // value는 위에 두개를 의미
    <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
      {children}
    </DarkModeContext.Provider>
  )
}