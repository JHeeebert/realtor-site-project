// IMPORT COMPONENTS
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Carousel from "./components/Carousel/Carousel";

import "./App.css";

const App = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
  }, []);
  const [selectedSection, setSelectedSection] = useState("About Me");
  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };
  return (
    <div>      
      <NavBar
        selectedSection={selectedSection}
        handleSectionChange={handleSectionChange}
      />
      <Carousel /> {/* Display the Carousel */}
      {/* Rest of the components */}
      {/* {selectedSection === "About Me" && <About />}
      {selectedSection === "Contact" && <Contact />}
      {selectedSection === "Portfolio" && <Portfolio />}
      {selectedSection === "Resume" && <Resume />} */}
      <Footer />
    </div>
  );
};

export default App;




