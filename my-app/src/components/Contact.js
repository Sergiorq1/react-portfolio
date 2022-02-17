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
                    <div className="input-group mb-3">
                        <span for="inputName" class='input-group-text' id="inputGroup-sizing-default">Name</span>
                        <input
                            type="text"
                            name="name"
                            class="form-control"
                            id='inputName'
                            aria-describedby='nameHelp'
                            tabIndex="1"
                            placeholder='John Cena'
                            ref = {nameRef}
                        />
                        <span for="inputSubject" class='input-group-text' id="inputGroup-sizing-default" >Subject</span>
                        <input
                            type="text"
                            name="subject"
                            class="form-control"
                            id='inputSubject'
                            aria-describeedby='emailSubjectHelp'
                            tabIndex="2"
                            // placeholder='Subject'
                            ref = {subjectRef}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="inputEmail" class='form-label'>Email</label>
                        <input
                            type="email"
                            name="email"
                            class="form-control" 
                            id="inputEmail" 
                            aria-describedby="emailHelp"
                            placeholder="example@corp.com"
                            tabIndex="3"
                            ref = {emailRef}
                        />
                        <div id="emailHelp" class="form-text">I'll never share your email with anyone else ;)
                        </div>
                    </div>
                    <div className="input-group">
                        <span for="inputMessage" class='input-group-text'>Message</span>
                        <textarea 
                            placeholder="Start typing..."
                            class="form-control"
                            aria-label='message'
                            name="message"
                            ref = {messageRef}
                        />
                    </div>
                    <button type="button" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact;
