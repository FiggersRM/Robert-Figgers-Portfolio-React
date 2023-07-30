import React from 'react';

export default function NavTabs({ currentPage, handlePageChange }) {
    return (
        <ul className="navul">
          <li>
            <a href="#AboutMe" onClick={() => handlePageChange('AboutMe')}className={currentPage === 'AboutMe' ? 'navlinkactive' : 'navlink'}>About Me</a>
          </li>
          <li>
            <a href="#Work" onClick={() => handlePageChange('Projects')} className={currentPage === 'Projects' ? 'navlinkactive' : 'navlink'}>Projects</a>
          </li>
          <li>
            <a href="#ContactMe" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'navlinkactive' : 'navlink'}>Contact Me</a>
          </li>
          <li>
            <a href='#Resume' onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'navlinkactive' : 'navlink'}>Resume</a>
          </li>
        </ul>
    )
}