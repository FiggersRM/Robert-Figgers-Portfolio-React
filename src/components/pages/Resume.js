import React from "react";
import myResume from "../../Resume.pdf"

function Resume() {
  return (
    <>
    <div className="resumeSpan">
    <span className="resumeSpan">Please click <a href={myResume} download="Robert-Figgers-Resume">here</a> to download my resume</span>
    </div>
  <div className="frontEnd">
    <h2 style={{textDecoration: 'underline'}}>Front-End Skills:</h2>
    <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>jQuery</li>
    <li>Bulma</li>
    <li>Bootstrap</li>
    <li>React</li>
    </ul>
  </div>
  <div className="backEnd">
    <h2 style={{textDecoration: 'underline'}}>Back-End Skills:</h2>
    <ul>
    <li>APIs</li>
    <li>Node</li>
    <li>Express</li>
    <li>mySQL, Sequelize</li>
    <li>MongoDB, Mongoose</li>
    <li>MERN</li>
    <li>GraphQL</li>
    </ul>
  </div>
  </>
    );
}

export default Resume;
