import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./LandingPage/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./AboutPage/About";
import Mystery from "./MysteryPage/Mystery";
import PageThree from "./PageThree/PageThree";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/mystery" element={<Mystery />} />
        <Route path="/page3" element={<PageThree />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
