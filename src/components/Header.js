import React from "react";
import headerimg from '../images/headerimg.JPG';
import NavTabs from './NavTabs';

export default function Header({currentPage, handlePageChange}) {
  return (
    <header className="header">
      <h1>Robert "Mitch" Figgers Portfolio</h1>
      <img src={headerimg} alt="" className="headerimg"/>
      <nav>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>
      </nav>
    </header>
  );
}
