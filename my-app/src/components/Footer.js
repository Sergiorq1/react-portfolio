import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className='footer-container'>
        <div className="footer-contact">
            <p>
                Contact Info
            </p>
        </div>

        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">

                </div>
            </div>
        </div>
        <div className="social-icons">
            <Link 
                class='social-icon github'
                to='https://github.com/Sergiorq1'
                
            >
                <i class="fab fa-github"></i>
            </Link>

            <Link 
                class='social-icon linkedin'
                to='https://www.linkedin.com/in/sergio-rodriguez-quiroz-ba31621b3/'
                
            >
                <i class="fab fa-linkedin"></i>
            </Link>
            
            <Link 
                class='social-icon medium'
                to='https://sergio-rodriguez-63720.medium.com/'
                
            >
                <i class="fab fa-medium"></i>
            </Link>

        </div>
    </div>

  );
}

export default Footer;
