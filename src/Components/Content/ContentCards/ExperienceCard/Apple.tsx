import {
    Accordion,
    AccordionSummary,
    Typography,
    AccordionDetails,
    Box,
  } from "@mui/material";
  import React from "react";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


  
  export default function AppleAccordian() {
    return (
      <div className="EducationContainerElement">
        <Accordion >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography >Apple Tech Advisor</Typography>
          </AccordionSummary>
  
          <AccordionDetails>
            <Typography>Provided technical troubleshooting for iOS, iPadOS, watchOS systems, as well as iCloud/Apple ID related issues </Typography>
            <Typography>Led initiative in onboarding program to help develop the skills of peers </Typography>
            <br></br>
           
          </AccordionDetails>
  
  
        </Accordion>
      </div>
    );
  }
  