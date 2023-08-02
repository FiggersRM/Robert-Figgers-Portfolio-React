import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ContentContainer from "./components/ContentContainer";
import Footer from "./components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("About-Me");

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="bigCont">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <ContentContainer currentPage={currentPage} />
      <Footer />
    </div>
  );
}

export default App;
