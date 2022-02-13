import React, { useRef } from 'react';
import './Contact.css';



function Contact() {
const nameRef = useRef(null)
const subjectRef =  useRef(null)
const emailRef = useRef(null)
const messageRef =  useRef(null)
const handleSubmit = (event) => {
    event.preventDefault()

    const data = {
          name: nameRef.current.value,
          subject: subjectRef.current.value,
          email: emailRef.current.value,
          message: messageRef.current.value
          }
    alert("tadaaa!: \n" + JSON.stringify(data) + "Your data 😎")
}
  return (
    <div className="contact" id='contact'>
        <div className="contact-box">
            <h1>Contact Me</h1>
            <div className="contact-container">
                <form className="form">
                    <div className="name">
                        <label for="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="name"
                            tabIndex="1"
                            placeholder='John Cena'
                            ref = {nameRef}
                        />
                        <label for="subject">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            className="subject"
                            tabIndex="2"
                            // placeholder='Subject'
                            ref = {subjectRef}
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
                    <button type="submit" className="send">Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact;
