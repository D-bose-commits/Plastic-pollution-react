import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);    {/* update and changes the state needs a function to actually update*/}
  const [button, setButton] = useState(true);   {/* */}

  const handleClick = () => setClick(!click);   {/* this sets click to the opposite state*/}
  const closeMobileMenu = () => setClick(false); {/*this is the function which closes the menu when clicking a nav link */}

  const showButton = () => {                    {/* */}
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {                             {/* */}
    showButton();
  }, []); {}

  window.addEventListener('resize', showButton); {/* */}

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              BUPP
              <i class="fab fa-centos" />
          </Link>
          <div className='menu-icon' onClick={handleClick}>               {/*resets the menu icon*/}
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />      {/*makes the menu change icon depending on each time clicked to go back forth*/}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>         {/*makes nav disappear in mobile mode*/}
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>   {/*this closes menu when clicked on nav links*/}
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/videosdocumentaries'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Videos and Documentaries
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/questionnaires'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Questionnaires
                </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/quizzes'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Quizzes
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Articles'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Articles
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/News'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                News
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
