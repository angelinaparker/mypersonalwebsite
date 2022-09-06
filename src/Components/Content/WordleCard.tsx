import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Box,
  Button,
  Link,
  Paper,
} from "@mui/material";
import * as React from "react";
import CoursesAccordian from "./ContentCards/EductionCard/EducationCardAccordians/CoursesAccordian";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function WordleAccordion() {
  return (
    <div className="EducationContainer">
      <Box sx={{ flexGrow: "1", ml: "auto", mr: "auto", width: "97%" }}>
          <Link href="https://63177797e5cb6105e326c53e--bejewelled-hummingbird-42a440.netlify.app/">  
        <Button variant="contained">
          WORDLE by Angelina
        </Button>
          </Link>
      </Box>
      <br></br>
    </div>
  );
}
