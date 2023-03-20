import {
  Links,
  LiveReload,
  Meta,
  Outlet,
} from "remix";

import { useEffect, useState } from 'react';
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

export default function App() {
  return (
    <Document>
      <Navbar>
        <Outlet />
      </Navbar>
    </Document >
  );
}

function Document({ children }) {
  return (
    <html lang="en">
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
  const toggleTheme = () => {
    console.log('ss');
  };
  return (
    <>
      <nav className="border-gray-200 border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-white dark:bg-black">
        <div className="text-right">
          <label className="toggleDarkBtn">
            <input type="checkbox" onChange={toggleTheme} />
            <span className="slideBtnTg round"></span>
          </label>
        </div>
        { children }
      </nav>
    </>
  )
}
