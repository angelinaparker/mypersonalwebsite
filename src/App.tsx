import React from "react";
import "./App.css";
import { createTheme } from "@mui/material/styles";
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";
import Footer from "./Components/Navbar/Footer";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@emotion/react";

// const gradient = createTheme({
//   palette: {
//     primary:{
//       main: '#ffffff',

//       mainGradient: "linear-gradient(to bottom, #D3CBB8, #6D6027)",
//     }
//   }
// })


const App = () => {
  return (
    <>
      <Navbar />
      {/* <Content /> */}
      
        <Footer />
      
    </>
  );
};

export default App;
