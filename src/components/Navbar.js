import { Link } from "react-scroll"
import "./Navbar.css"

import React from 'react'

const Navbar = () => {
    const handleScroll = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
      };
    
      return (
        <div className="navbar">
          <div className="navbar-item" onClick={() => handleScroll('home')}>Home</div>
          <div className="navbar-item" onClick={() => handleScroll('about')}>About</div>
          <div className="navbar-item" onClick={() => handleScroll('projects')}>Projects</div>
          <div className="navbar-item vote" onClick={() => handleScroll('contact')}>Contact</div>
          
        </div>
      );
    };

export default Navbar