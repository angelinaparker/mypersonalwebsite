import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";


const redNavBar = {
  color: 'red',
};

const PageThree = () => {
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

export default PageThree;
