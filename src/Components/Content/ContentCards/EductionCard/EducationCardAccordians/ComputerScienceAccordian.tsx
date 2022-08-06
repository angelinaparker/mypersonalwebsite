import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import './EducationStyles.css'

export default function ComputerScienceAccordian() {
  return (
    <div className="EducationContainerElement">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Computer Science</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Minor: San Diego State University</Typography>
          <Typography>Graduation: 2023</Typography>
        </AccordionDetails>
        
      </Accordion>
    </div>
  );
}
