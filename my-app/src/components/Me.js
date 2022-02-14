import React from 'react';
import "../App.css"
import './Me.css'

function Me() {
  return (
    <div className="me-container">
        <h1>About Me:</h1>
        <p> I'm a 19-year-old 2nd year student at Dominican University of California studying back-end web development. <hr/>
        I have experience working with front-end frameworks like react and bootstrap, and I am comfortable with back-end stack like node.js, mongoDB, AWS Lambda, and Docker. My favorite thing about being a software engineer is the continuous learning of new technology and collaboration with people who are just as passionate as I am.<hr/>
        Outside of tech, growing up with many musicians in my family has inspired my love for regional mexican music and jazz. Another important aspect of my upbringing is nature, since I was raised in Central California away from big cities and near national parks like Yosemite, Kings Canyon, and Sequoia. Places like the Underground Garden and Woodward Park in Fresno are often my mental go-to's when meditating because of the "harmonic tranquility" they represent in my head. <hr/>I love to chat, so feel free to <a href="/#contact" className='link'>contact</a> me through email to schedule a time!</p>
    </div>
  )
}

export default Me;
