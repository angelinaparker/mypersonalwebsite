import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CoursesAccordian from "./CoursesAccordian";

export default function MEAccordian() {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Mechanical Engineering</Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Typography>B.S: San Diego State University </Typography>
        <Typography>Graduation: 2023 </Typography>
      </AccordionDetails>

      <AccordionDetails>
      <CoursesAccordian/> 
      </AccordionDetails>
      
      
    </Accordion>
  );
}
