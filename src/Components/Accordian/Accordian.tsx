
import * as React from "react";
import MEAccordian from "../Content/ContentCards/EductionCard/EducationCardAccordians/MEAccordian";
import ComputerScienceAccordian from "../Content/ContentCards/EductionCard/EducationCardAccordians/ComputerScienceAccordian";


export default function SimpleAccordion() {
  return (
    <div className="EducationContainer">
      <MEAccordian />
      <ComputerScienceAccordian />
    </div>
  );
}