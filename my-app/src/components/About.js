import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import "../App.css"
import './About.css'
function About() {
  return (
    <div className='about-container'>
        <h1>
            Hi, I'm Sergio. <br/>
            A Developer.
        </h1>
        <p>In a nutshell, I'm a creative person who loves learning and working with technologies regarding API's, blockchain, and music 
        <Link to="/background">Learn more</Link>
        </p>
    </div>
  )
}
export default About;
