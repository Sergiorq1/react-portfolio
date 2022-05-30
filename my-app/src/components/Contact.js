import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';



function Contact(props) {
  return (
    <div className="contact" id='contact'>
        <div className="contact-box">
            <h1>Contact Me through email at <Link to="mailto:sergiorq12016@gmail.com">sergiorq12016@gmail.com</Link></h1>
        </div>
    </div>
  )
}

export default Contact;
