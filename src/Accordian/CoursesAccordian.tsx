import { Accordion, AccordionSummary, Typography, AccordionDetails } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function CoursesAccordian() {
    return (
<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Courses Completed</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Computer-Aided Design (SOLIDWORKS)
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
            Statics, Dynamics
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
            Methods of Analysis
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
          Mechatronics
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
          Fluids Engineering
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
          Mechanics of Materials, Engineering Design: Mechanical Components
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
          Thermodynamics, Applications of Thermodynamics, Principles of Heat Transfer
          </Typography>
        </AccordionDetails>
      </Accordion>
    )
}
