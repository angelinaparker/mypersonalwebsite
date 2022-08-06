import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";


const redNavBar = {
  color: 'red',
};

const Mystery = () => {
  return (
    <>
      <div style={redNavBar}>
        <Navbar />
        <div>You are on the Contact page</div>
        <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
      </div>
    </>
  );
};

export default Mystery;
