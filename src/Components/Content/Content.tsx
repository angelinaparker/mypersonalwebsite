import { Card, Box, Slider, Paper, Typography,  } from "@mui/material";
import React, { useState } from "react";
import EducationCard from "./ContentCards/EductionCard/EducationCard";
import PictureCard from "./ContentCards/PictureCard/PictureCard";
import { ContentCardStyling, ContentContainerStyle } from "./ContentStyles";

const Content = () => {
  return (
    <>
      <Box sx={ContentContainerStyle}>
        <PictureCard />
      </Box>
      
      <Box sx={{ border: "none", flexFlow: "row" }}>
        <EducationCard />
      </Box>

      

    </>
  );
};

export default Content;
