import "./Home.css"
import kgk from "../Assets/IMG_20240312_154300.jpg"

import React from 'react'

const Home = () => {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="home" id="home">
      <div className="left-section">
        <div className="heading">
          <h1>HI, I am </h1>
          <h1>K.G.KalyanaSundaram</h1>
        </div>
        <div className="text">
          <h3>A proficient UI/UX designer</h3>
        </div>
        <div className="navbar-item vote" onClick={() => handleScroll('contact')}>Contact</div>
      </div>
      <div className="right-section">
        <div className="imageframe">
          <img src={kgk} alt="image" className="img"/>
        </div>
      </div>
    </div>
  )
}

export default Home