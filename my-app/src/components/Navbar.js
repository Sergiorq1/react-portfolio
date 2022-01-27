import React, {useState} from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Button } from './Button';
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

  window.addEventListener('resize', showButton);
  return (
  <>
    <nav className='navbar'>
        <div className="navbar-container">
            <Link to='/' className='navbar-logo'>
                Sergio Rodriguez <i class="fas fa-compact-disc"></i>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'> 
                    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                        About Me
                    </Link>
                </li>
                <li className='nav-item'> 
                    <Link to='/experience' className='nav-links' onClick={closeMobileMenu}>
                        Experience
                    </Link>
                </li>
                <li className='nav-item'> 
                    <Link to='/links' className='nav-links' onClick={closeMobileMenu}>
                        Prof. Links
                    </Link>
                </li>
                <li className='nav-item'> 
                    <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                        Contact Info
                    </Link>
                </li>
                <li className='nav-item'> 
                    <Link to='/fun' className='nav-links' onClick={closeMobileMenu}>
                        Fun Facts API
                    </Link>
                </li>
                <li className='nav-item'> 
                    <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
                        Sign Up
                    </Link>
                </li>                
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>



    </nav>

  </>
  )
}

export default Navbar;
