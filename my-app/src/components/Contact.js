import React, { useRef } from 'react';
import './Contact.css';



function Contact() {
const firstNameRef = useRef(null)
const lastNameRef =  useRef(null)
const emailRef = useRef(null)
const messageRef =  useRef(null)
  return (
    <div className="contact">
        <div className="contact-box">
            <h1>Contact Me</h1>
            <div className="contact-container">
                <form className="form">
                    <div className="name">
                        <label for="firstName">First name</label>
                        <input
                            type="text"
                            name="firstName"
                            className="firstName"
                            tabIndex="1"
                            placeholder='John'
                            ref = {firstNameRef}
                        />
                        <label for="lastName">Last name</label>
                        <input
                            type="text"
                            name="lastName"
                            className="lastName"
                            tabIndex="2"
                            placeholder='Cena'
                            ref = {lastNameRef}
                        />
                    </div>

                    <label for="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="email"
                        placeholder="example@corp.com"
                        tabIndex="3"
                        ref = {emailRef}
                    />

                    <label for="message">Message</label>
                    <textarea
                        placeholder="Start typing..."
                        className="message"
                        name="message"
                        ref = {messageRef}
                    />
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact;
