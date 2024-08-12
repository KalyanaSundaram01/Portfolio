import "./Projects.css";
import pat1 from "../Assets/patent1.jpeg";
import pat2 from "../Assets/patent2.jpeg";

import React from 'react';

const Projects = () => {
  return (
    <div className="project" id="project">
      <div className="patent">
        <h1>Patents Published</h1>
        <div className="patent-img">
          <div className="flip-container">
            <div className="flip-card">
              <div className="flip-card-front">
                <img src={pat1} alt="patent1" className="image" />
              </div>
              <div className="flip-card-back">
                <p>Description for Patent 1</p>
              </div>
            </div>
          </div>
          <div className="flip-container">
            <div className="flip-card">
              <div className="flip-card-front">
                <img src={pat2} alt="patent2" className="image" />
              </div>
              <div className="flip-card-back">
                <h4> CANCELLED TICKET REBOOKING SYSTEM </h4>
                <p>The abstract of this project is to create a friendly use of the passengers for rebooking the available reservation tickets after the
departure of the train that can effectively make the use of the unreserved passengers will use the reserved seats using in this system.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
