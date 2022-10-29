import React, { useContext } from 'react'
import { DarkModeContext, DarkModeProvider } from './Context/DarkModeContext';
import './AppThemeCss.css'

const AppTheme = () => {
  return (
    <DarkModeProvider>
      <Header/>
      <Main/>
      <Footer/>
      <ProductDetail/>
    </DarkModeProvider>
  )
}

export default AppTheme;

function Header() {
  return (
    <header className='header'>Header</header>
  )
}

function Main() {
  return (
    <>
      <p>Main</p>
      <p>Profile</p>
      <p>User</p>
      <p>Products</p>
      <p>Products Detail</p>
    </>
  )
}

function Footer() {
  return (
    <>
      <p>Footer</p>
    </>
  )
}

function ProductDetail() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div>
      Product Detail
      <p>
        DarkMode:
        {darkMode ? (
          <span style={{ backgroundColor: 'black', color: 'white' }}>
            Dark Mode
          </span>
        ) : (
          <span>Light Mode</span>
        )}
      </p>
      <button onClick={() => toggleDarkMode()}>Toggle</button>
    </div>
  );
}
