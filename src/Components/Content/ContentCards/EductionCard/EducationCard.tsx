import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import EducationAccordion from "./EducationCardAccordians/EducationCardAccordian";

const paperStyle = { flexGrow: "1", ml: "auto", mr: "auto", width: "97%", }

export default function EducationCard() {
  return (
    <Paper
      elevation={24}
      sx={paperStyle}
    >
      <Card>
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "-apple-system" }}
          >
            EDUCATION
          </Typography>
          <br></br>

          <EducationAccordion />
          
        </CardContent>
      </Card>
    </Paper>
  );
}
