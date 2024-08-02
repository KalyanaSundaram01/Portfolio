import { Link } from "react-scroll"
import "./About.css"

import React from 'react'
import { FaCss3, FaFigma, FaGit, FaGithub, FaHtml5, FaInstagram, FaJs, FaLinkedin, FaMicrosoft } from "react-icons/fa"

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-left-section">
      <h1>About Me</h1>
        <p>I'm K.G.Kalyana Sundaram,
Passionate web developer
pursuing a Computer Science
Engineering degree at Francis
Xavier Engineering College.
Known Skills in HTML, CSS,
JavaScript, with a focus on
creating visually appealing and
user-friendly interfaces.</p>
         <div className="react-icon">
         <a href="https://github.com/KalyanaSundaram01" target="_blank" rel="noopener noreferrer">
         <FaGithub />
         </a>
         <a href="https://github.com/KalyanaSundaram01" target="_blank" rel="noopener noreferrer">
         <FaLinkedin />
         </a>
         <a href="https://github.com/KalyanaSundaram01" target="_blank" rel="noopener noreferrer">
         <FaInstagram />
         </a>
         </div>
      </div>
      <div className="about-right-section">
          <h1>Expertize</h1>
          <div className="icon">
            <FaFigma/>
            <FaHtml5/>
            <FaCss3/>
            <FaJs/>
            <FaGit/>
            <FaGithub/>
          </div>
      </div>
    </div>
  )
}

export default About