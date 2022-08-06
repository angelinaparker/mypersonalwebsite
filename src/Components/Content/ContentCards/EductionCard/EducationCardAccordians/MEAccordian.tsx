import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Box,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CoursesAccordian from "./CoursesAccordian";
import './EducationStyles.css'

export default function MEAccordian() {
  return (
    <div className="EducationContainerElement">
      <Accordion sx={{maxWidth:"50%"}}>
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
          <br></br>
          <CoursesAccordian />
        </AccordionDetails>


      </Accordion>
    </div>
  );
}
