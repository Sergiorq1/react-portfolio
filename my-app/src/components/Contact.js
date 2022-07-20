import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';



function Contact(props) {
  return (
    <div className="contact" id='contact'>
        <div className="contact-box">
            <h1>Contact me through email at <a>sergiorq12016@gmail.com</a></h1>
        </div>
    </div>
  )
}

export default Contact;
