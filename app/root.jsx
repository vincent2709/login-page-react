import {
  Links,
  LiveReload,
  Meta,
  Outlet,
} from "remix";
import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import tailwindStyles from "./styles/tailwind.css";
import styles from "./styles/styles.css";

export function links() {
  return [
    { rel: "stylesheet", href: tailwindStyles },
    { rel: "stylesheet", href: styles },
  ];
}

export function meta() {
  return { title: "Remix Login App" };
}

const Theme = {
  DARK: 'dark',
  LIGHT: 'light',
}

export default function App() {
  const [theme, setTheme] = useState(Theme.LIGHT);
  console.log('initial:', theme);
  useEffect(() => {
    console.log('initial:', theme);
  }, [theme]);
  return (
    <Document 
      theme={theme}
      propTheme={(val) =>{
        console.log('setTheme:', val);
        setTheme(val);
      }}>
      <Navbar>
        <Outlet />
      </Navbar>
    </Document >
  );
}

function Document({ children, theme, propTheme }) {
  console.log('theme:', theme);
  propTheme(Theme.DARK);
  return (
    <html lang="en" className={theme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
			<body style={{ margin: '0 2.5vw' }} className="bg-white dark:bg-black">
        {children}
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  )
}

export function Navbar({ children }) {
  const handleChange = () => {
    console.log('Change');
  }
  return (
    <>
      <nav className="border-gray-200 border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-white dark:bg-black">
        <div className="text-right">
          <label className="toggleDarkBtn">
            <input type="checkbox" onChange={() => handleChange} />
            <span className="slideBtnTg round"></span>
          </label>
        </div>
        { children }
      </nav>
    </>
  )
}

Navbar.propTypes = {
  theme: PropTypes.string,
  propTheme: PropTypes.func.isRequired,
};
