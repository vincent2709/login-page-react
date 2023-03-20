import { createContext, useState } from 'react';

const Theme = {
   DARK: 'dark',
   LIGHT: 'light',
}

const ThemeContext = createContext(Theme.LIGHT);
function ThemeProvider({ children }) {
   const [theme, setTheme] = useState(Theme.LIGHT);
   return <ThemeContext.Provider context={[theme, setTheme]}>{children}</ThemeContext.Provider>;
}

export { Theme, ThemeProvider };