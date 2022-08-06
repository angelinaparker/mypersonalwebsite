import * as React from "react";

import ComputerScienceAccordian from "./ComputerScienceAccordian";
import './EducationStyles.css'
import MEAccordian from "./MEAccordian";

export default function EducationAccordion() {
  return (
    <div className="EducationContainer">
      <MEAccordian />
      <ComputerScienceAccordian />
    </div>
  );
}
