import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import red from "@mui/material/colors/red";

const redNavBar = {
  color: 'red',
};

const About = () => {
  return (
    <>
      <div style={redNavBar}>
        <Navbar />
        <div>You are on the about page</div>
        <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
      </div>
    </>
  );
};

export default About;
