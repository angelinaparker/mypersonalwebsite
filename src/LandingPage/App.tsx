import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import "./App.css";
import Footer from "../Components/Navbar/Footer";
import Content from "./LandingPageContent/Content";

const App = () => { 

  return (
    <>
      <Navbar />
      <Content />
      <Footer />
    </>
  );
};

export default App;
