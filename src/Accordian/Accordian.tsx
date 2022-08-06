import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Card, Paper } from '@mui/material';
import CoursesAccordian from './CoursesAccordian';
import ComputerScienceAccordian from './ComputerScienceAccordian';
import MEAccordian from './MEAccordian';

export default function SimpleAccordion() {
  return (

    <div>

      <MEAccordian/>

      <ComputerScienceAccordian/>

      
   
    </div>

  );
}
