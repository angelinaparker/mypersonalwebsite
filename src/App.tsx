import React from "react";
import "./App.css";
import { createTheme } from "@mui/material/styles";
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";
import Footer from "./Components/Navbar/Footer";

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
