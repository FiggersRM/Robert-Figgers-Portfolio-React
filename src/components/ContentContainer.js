import React from "react";
import AboutMe from "./pages/Aboutme";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";

export default function ContentContainer({ currentPage }) {
  // renders the section at the top of each page
  const renderHeader = () => {
    if (currentPage === "About-Me" || "Contact-Me") {
      const newString = currentPage.split("-").join(" ");
      return newString;
    }
    return currentPage;
  };
  const renderPage = () => {
    // renders the content on each page
    if (currentPage === "About-Me") {
      return <AboutMe />;
    }
    if (currentPage === "Contact-Me") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Projects />;
  };
  return (
    <div className="contentcontainer">
      <h1 className="contenttitle">{renderHeader()}</h1>
      <main className="content">{renderPage()}</main>
    </div>
  );
}
