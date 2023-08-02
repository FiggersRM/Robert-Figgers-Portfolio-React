import React from "react";
import WTHFD from "../../images/logo.png";
import RR from "../../images/RoamReady.png";
import EC from "../../images/ECommerce.png";
import WF from "../../images/WF.png";
import SN from "../../images/SN.jpg";
import EI from "../../images/EatIt.png";
import {FaGithub} from 'react-icons/fa6';

function Projects() {
  return (
  <>
    <div className="card">
    <a href="https://figgersrm.github.io/WTHFD/">
              <img
                src={WTHFD}
                alt="This is a logo for the website What the Hell's for Dinner. It features 3 small circles slightly overlapping each other in a horizontal direction. The first one is red with an outline of a knife. The middle one is light green with an outline of a spoon, and the right one is yellow-orange with an outline of a fork."
              />
              </a>
              <a  class="linkboxes" href="https://figgersrm.github.io/WTHFD/">What the Hell's for Dinner?</a><a href="https://github.com/FiggersRM/WTHFD" className="ghIcon"> <FaGithub /></a>
    </div>
    <div className="card">
    <a href="https://limitless-badlands-70129.herokuapp.com/">
              <img
                src={RR}
                alt="A logo for Roam Ready that contains a model airplane flying over grass through the sky. The grass and sky are in the shape of a location's pin"
                style={{width: 175, paddingTop: 30}}
              />
              </a>
              <a  class="linkboxes" href="https://limitless-badlands-70129.herokuapp.com/">Roam Ready </a><a href="https://github.com/FiggersRM/Roam-Ready" className="ghIcon"> <FaGithub /></a>
    </div>
    <div className="card">
    <a href="https://drive.google.com/file/d/1bsA68kYsIEaknKSGiEAXmy7p6yHFG4O-/view?usp=drive_link">
              <img
                src={EC}
                alt="A graphic respresenting a website where things may be purchased"
                style={{borderRadius: '5px'}}
              />
              </a>
              <a  class="linkboxes" href="https://drive.google.com/file/d/1bsA68kYsIEaknKSGiEAXmy7p6yHFG4O-/view?usp=drive_link">E-Commerce Serve</a><a href="https://github.com/FiggersRM/E-Commerce-Back-End" className="ghIcon"><FaGithub /></a>
    </div>
    <div className="card">
    <a href="https://figgersrm.github.io/5-Day-Weather-Forecast-C6/">
              <img
                src={WF}
                alt="A screenshot of the working application that is showing a five day forecast for the city of Richmond Virginia"
              />
              </a>
              <a  class="linkboxes" href="https://figgersrm.github.io/5-Day-Weather-Forecast-C6/">5-Day Weather Forecaster</a><a href="https://github.com/FiggersRM/5-Day-Weather-Forecast-C6" className="ghIcon"> <FaGithub /></a>
    </div>
    <div className="card">
    <a href="https://drive.google.com/file/d/1VckhwUFNlwP1ngZ7dBG7F6JJBe5k5Dfw/view?usp=drive_link">
              <img
                src={SN}
                alt="A graphic that represents a social network."
                style={{paddingTop: 30}}
              />
              </a>
              <a  class="linkboxes" href="https://drive.google.com/file/d/1VckhwUFNlwP1ngZ7dBG7F6JJBe5k5Dfw/view?usp=drive_link">Social Network API</a><a href="https://github.com/FiggersRM/Social-Network-API" className="ghIcon"> <FaGithub /></a>
    </div>
    <div className="card">
    <a href="https://github.com/FiggersRM/Eat-It">
              <img
                src={EI}
                alt="This is a logo for the Eat It application. It features a green face, similar to PacMan, with an arrow going into its mouth. Underneath the logo is the name of the application, Eat It."
                style={{width: 205, paddingTop: 40}}
              />
              </a>
              <a  class="linkboxes" href="https://github.com/FiggersRM/Eat-It">Eat It</a><a href="https://github.com/FiggersRM/Eat-It" className="ghIcon"> <FaGithub /></a>
    </div>
  </>
    );
}

export default Projects;
