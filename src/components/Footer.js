import React from 'react'
import {FaGithub} from 'react-icons/fa6';
import {FaLinkedin} from 'react-icons/fa6';
import {FaStackOverflow} from 'react-icons/fa6';

function Footer() {
  return (
    <div className="footer">
        <a href="https://github.com/FiggersRM" className="icon"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/mitchfiggers/" className="icon"><FaLinkedin /></a>
        <a href="https://stackoverflow.com/users/22323842/figgersrm" className="icon"><FaStackOverflow /></a>
    </div>
  )
}

export default Footer