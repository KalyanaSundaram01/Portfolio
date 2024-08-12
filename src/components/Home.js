import "./Home.css"
import kgk from "../Assets/IMG_20240312_154300.jpg";

import React from 'react'

const Home = () => {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeClick = () => {
    const pdfUrl = 'KGKResume.pdf';
    window.open(pdfUrl, '_blank');
  }
  return (
    <div className="home" id="home">
      <div className="left-section">
        <div className="heading">
          <h1 className="hi">HI, I am </h1>
          <h1 className="name">K.G.KalyanaSundaram</h1>
        </div>
        <div className="text">
          <h3>A proficient Frontend Developer</h3>
        </div>
        <div className="home-btn">
        <div className="btn" onClick={() => handleScroll('contact')}>Contact</div>
        <div className="btn" onClick={handleResumeClick}>Resume</div>
        </div>
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