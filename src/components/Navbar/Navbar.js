import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
    
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <HashLink smooth to='/#homew' className='navbar-logo' onClick={closeMobileMenu}>
            ONE DIRECTION
            
          </HashLink>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <HashLink 
                smooth to='/#homew' 
                className='nav-links' 
                onClick={closeMobileMenu}>
                Home
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink
                smooth to='/res'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Bookings
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink
                smooth to='/menu'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Albums
              </HashLink>
            </li>
            
            <li className='nav-item'>
              <HashLink
                smooth to='/#contactPage'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink
                smooth to='/tour'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Tour
              </HashLink>
              </li>

          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
