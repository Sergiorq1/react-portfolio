import React, { useRef, useState } from 'react';
import './Contact.css';



function Contact() {
const nameRef = useRef(null)
const subjectRef =  useRef(null)
const emailRef = useRef(null)
const messageRef =  useRef(null)
// const handleSubmit = (event) => {
//     event.preventDefault()

//     const data = {
//           name: nameRef.current.value,
//           subject: subjectRef.current.value,
//           email: emailRef.current.value,
//           message: messageRef.current.value
//           }
//     alert("tadaaa!: \n" + JSON.stringify(data) + "Your data 😎")
// }
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
    alert('submittinggg')
    e.preventDefault();
    setStatus("Sending...");
    const { name, subject, email, message } = e.target.elements;
    let details = {
        name: name.value,
        subject: subject.value,
        email: email.value,
        message: message.value,
    };
    let response = await fetch("http://localhost:3000", {
        method: "POST",
        headers: {
        "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
    };




  return (
    <div className="contact" id='contact'>
        <div className="contact-box">
            <h1>Contact Me</h1>
            <div className="contact-container">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="input-group mb-3">
                        <span for="inputName" class='input-group-text' id="inputGroup-sizing-default">Name</span>
                        <input
                            type="text"
                            name="name"
                            class="form-control"
                            id='name'
                            aria-describedby='nameHelp'
                            tabIndex="1"
                            placeholder='John Cena'
                            ref = {nameRef}
                            required 
                        />
                        <span for="inputSubject" class='input-group-text' id="inputGroup-sizing-default" >Subject</span>
                        <input
                            type="text"
                            name="subject"
                            class="form-control"
                            id='subject'
                            aria-describeedby='emailSubjectHelp'
                            tabIndex="2"
                            ref = {subjectRef}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label for="inputEmail" class='form-label'>Email</label>
                        <input
                            type="email"
                            name="email"
                            class="form-control" 
                            id="email" 
                            aria-describedby="emailHelp"
                            placeholder="example@corp.com"
                            tabIndex="3"
                            ref = {emailRef}
                            required
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
                            id="message"
                            ref = {messageRef}
                            required
                        />
                    </div>
                    <button type="button" class="btn btn-primary">{status}</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact;
