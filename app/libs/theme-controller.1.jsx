import { createContext, useContext, useState, Dispatch, ReactNode, SetStateAction  } from 'react';
import { useDispatch } from 'react-redux'

const Theme = {
   DARK: 'dark',
   LIGHT: 'light',
}

// const ThemeContextType = useDispatch(SetStateAction);
const ThemeContext = createContext(null);

function ThemeProvider({ children }) {
   const {theme, setTheme} = useState(Theme.LIGHT);
   return <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>;
}

function useTheme() {
   const context = useContext(ThemeContext);
   if (context === undefined || context === null) {
      throw new Error('useTheme must be used within a ThemeProvider');
   }
   return context;
}
 
export { Theme, ThemeProvider, useTheme };