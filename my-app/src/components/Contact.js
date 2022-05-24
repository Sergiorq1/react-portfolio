import React, { useState } from 'react';
import './Contact.css';



function Contact(props) {
    const [mailerState, setMailerState] = useState({
        name: "",
        subject: "",
        email: "",
        message: "",
    });
    function handleStateChange(e) {
        setMailerState((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
    }
    // changing button
    const [status, setStatus] = useState("Submit");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ mailerState });
        // changing button
        setStatus("Sending...");
        
        await fetch("https://server-portfolio-s.herokuapp.com/contact", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({mailerState}),
        })
            .then((res) => res.json())
            .then(async (res) => {
                const resData = await res;
                console.log(resData);
                if (resData.status === "success") {
                alert("Message Sent");
                } else if (resData.status === "fail") {
                alert("Message failed to send");
                }
            })
        
            .then(() => {
              setMailerState({
                name: "",
                subject: "",
                email: "",
                message: "",
              });
            });
        setStatus("Submit");
        // let result = await response.json();
        // alert(result.status);
    };




  return (
    <div className="contact" id='contact'>
        <div className="contact-box">
            <h1>Contact Me</h1>
            <div className="contact-container">
                <form className="form"onSubmit={handleSubmit}>
                    <div className="input-group mb-3">
                        <span for="inputName" class='input-group-text' id="inputGroup-sizing-default">Name</span>
                        <input
                            type="text"
                            onChange={handleStateChange}
                            name="name"
                            class="form-control"
                            aria-describedby='nameHelp'
                            placeholder='John Cena'
                            value={mailerState.name}
                        />
                        <span for="inputSubject" class='input-group-text' id="inputGroup-sizing-default" >Subject</span>
                        <input
                            type="text"
                            name="subject"
                            class="form-control"
                            aria-describedby='emailSubjectHelp'
                            onChange={handleStateChange}
                            value={mailerState.subject}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="inputEmail" class='form-label'>Email</label>
                        <input
                            type="email"
                            name="email"
                            class="form-control" 
                            aria-describedby="emailHelp"
                            placeholder="example@corp.com"
                            onChange={handleStateChange}
                            value={mailerState.email}
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
                            onChange={handleStateChange}
                            value={mailerState.message}
                        />
                    </div>
                    <button type="submit" class="btn btn-primary">{status}</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact;
