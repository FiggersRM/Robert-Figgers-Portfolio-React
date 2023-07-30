import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ContentContainer from "./components/ContentContainer";

function App() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const handlePageChange = (page) => setCurrentPage(page);

  return (
  <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
  );
}

export default App;
