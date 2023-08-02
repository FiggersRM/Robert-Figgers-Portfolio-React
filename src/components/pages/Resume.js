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
    <p>HTML</p>
    <p>CSS</p>
    <p>JavaScript</p>
    <p>jQuery</p>
    <p>Bulma</p>
    <p>Bootstrap</p>
    <p>React</p>
  </div>
  <div className="backEnd">
    <h2 style={{textDecoration: 'underline'}}>Back-End Skills:</h2>
    <p>APIs</p>
    <p>Node</p>
    <p>Express</p>
    <p>mySQL, Sequelize</p>
    <p>MongoDB, Mongoose</p>
    <p>MERN</p>
    <p style={{marginBottom: '20px'}}>GraphQL</p>
  </div>
  </>
    );
}

export default Resume;
