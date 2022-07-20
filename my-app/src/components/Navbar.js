import React, {useState, useEffect} from 'react';
import './Navbar.css';
// import { Link } from 'react-router-dom';
import { Button } from './Button';
import { HashLink as Link } from 'react-router-hash-link';
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
      if(window.innerWidth <= 960) {
        setButton(false);
      } else {
          setButton(true);
      }
  };

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton);
  return (
  <>
    <nav className='navbar' id='/'>
        <div className="navbar-container">
            <Link to='/#' className='navbar-logo' onClick={closeMobileMenu}>
                <i class="fas fa-record-vinyl"></i>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'> 
                    <Link to='/background' className='nav-links' onClick={closeMobileMenu}>
                        About Me
                    </Link>
                </li>
                <li className='nav-item'> 
                    <Link to='/#projects' className='nav-links' onClick={closeMobileMenu}>
                        Projects
                    </Link>
                </li>
                <li className='nav-item'> 
                    <Link to='/#contact' className='nav-links' onClick={closeMobileMenu}>
                        Contact Me
                    </Link>
                </li>
                <li className='nav-item'> 
                    <Link to='/#links' className='nav-links' onClick={closeMobileMenu}>
                        Links
                    </Link>
                </li>  
            </ul>
        </div>
    </nav>
  </>
  )
}

export default Navbar;
