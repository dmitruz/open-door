import React from 'react'
import Logo from '../../images/logo.png';

 const Header = () => {
  return (
    <header>
    <div className='container flex'>
        <div className='logo'>
           <Logo /> 
        </div>
    </div>
    </header>
  )
}

export default Header;
