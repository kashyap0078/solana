
import React  from 'react'
import Header from './components/header';
import Footer from './components/footer';
import { useDarkMode } from './context/Darkmode';
import { Outlet } from 'react-router-dom';

const Layout = ()=> {
  const { isNightMode,  handleToggle } = useDarkMode();
  return (
    <div>
      <Header handleToggle={handleToggle} isNightMode={isNightMode} />
      <main>
       < Outlet/>

      </main>
      <Footer/>
    </div>
  )
}

export default Layout;
