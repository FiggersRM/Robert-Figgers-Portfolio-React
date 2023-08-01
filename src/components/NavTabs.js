import React from 'react';

export default function NavTabs({ currentPage, handlePageChange }) {
    return (
        <ul className="navul">
          <li>
            <a href="#AboutMe" onClick={() => handlePageChange('About-Me')}className={currentPage === 'About-Me' ? 'navlinkactive' : 'navlink'}>About Me</a>
          </li>
          <li>
            <a href="#Projects" onClick={() => handlePageChange('Projects')} className={currentPage === 'Projects' ? 'navlinkactive' : 'navlink'}>Projects</a>
          </li>
          <li>
            <a href="#ContactMe" onClick={() => handlePageChange('Contact-Me')} className={currentPage === 'Contact-Me' ? 'navlinkactive' : 'navlink'}>Contact Me</a>
          </li>
          <li>
            <a href='#Resume' onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'navlinkactive' : 'navlink'}>Resume</a>
          </li>
        </ul>
    )
}