import {
    Accordion,
    AccordionSummary,
    Typography,
    AccordionDetails,
    ListItem,
    Box,
  } from "@mui/material";
  import React from "react";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
  
  export default function FreelanceAccordian() {
    return (
      <div className="EducationContainerElement">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Software Engineer/Website Freelance Developer</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{fontWeight: "bold"}}>Roger Thai DDS</Typography>
            <Typography>
               Re-designed front-end website to modern feel to increase accessibility using React, Typescript, 
                and MaterialUI
          </Typography>
          </AccordionDetails>
          
        </Accordion>
      </div>
    );
  }
  