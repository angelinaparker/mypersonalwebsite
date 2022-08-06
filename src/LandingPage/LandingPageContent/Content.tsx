import { Card, Box, Slider, Paper, Typography } from "@mui/material";
import { width } from "@mui/system";
import React, { useState } from "react";
import BasicCard from "../../Components/BasicCard";
import { generateCards, wordsArr } from "./LandingPageInfo";

import PictureCard from "../PictureCard/PictureCard";
import { ContentCardStyling, ContentContainerStyle } from "./ContentStyles";

const Content = () => {
  return (
    <>
      <Box sx={ContentContainerStyle}> 
            <PictureCard />
      </Box>

      <Box sx= {{border: "none", flexFlow: "row"}} > 
            <BasicCard />
      </Box>

    </>
  );
};

export default Content;
