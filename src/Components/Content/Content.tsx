import {
  Card,
  Box,
  Slider,
  Paper,
  Typography,
  CardContent,
  CardActionArea,
  CardMedia,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import BasicCard from "./BasicCardSkills";
import ComputerScienceAccordian from "./ContentCards/EductionCard/EducationCardAccordians/ComputerScienceAccordian";
import EducationAccordion from "./ContentCards/EductionCard/EducationCardAccordians/EducationCardAccordian";
import MEAccordian from "./ContentCards/EductionCard/EducationCardAccordians/MEAccordian";
import AppleAccordian from "./ContentCards/ExperienceCard/Apple";
import FreelanceAccordian from "./ContentCards/ExperienceCard/Freelance";
import { ContentCardStyling, ContentContainerStyle } from "./ContentStyles";
import Projects from "./ProjectSkills";

const AMERICAN_PSYCHO = require("./Pictures/beach.gif");
const APPLE = require("./Pictures/myapple.gif");
const LOVE = require("./Pictures/love.gif");
const BEARSY = require("./Pictures/bearsy.gif");
const BKGROUND = require("./Pictures/newpink.jpg");
const MEDPINK = require("./Pictures/medpink.jpg");
const MOREPINK = require("./Pictures/morepink.jpg");
const MOSTPINK = require("./Pictures/betterpink.jpg");

const pictureCards = [AMERICAN_PSYCHO, APPLE, LOVE, BEARSY];
const paperStyle = { flexGrow: "1", ml: "auto", mr: "auto", width: "97%" };

const Content = () => {
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
  const [currentPicture, setCurrentPicture] = useState<typeof pictureCards[0]>(
    pictureCards[currentPictureIndex]
  );

  useEffect(() => {
    const changePictureInterval = setInterval(() => {
      if (currentPictureIndex > pictureCards.length - 1) {
        setCurrentPicture(pictureCards[0]);
        setCurrentPictureIndex(0);
      } else {
        setCurrentPictureIndex(currentPictureIndex + 1);
        setCurrentPicture(pictureCards[currentPictureIndex]);
      }
    }, 1500);
    return () => clearInterval(changePictureInterval);
  }, [currentPicture, currentPictureIndex]);

  return (
    <>
      <Box sx={ContentContainerStyle}>
        <Paper
          elevation={18}
          sx={{ flexGrow: "1", ml: "auto", mr: "auto", width: "97%" }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
               image={currentPicture} //enable this line to see the gifs
              alt="...loading..."
            />

            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ fontFamily: "-apple-system", fontWeight: "bold" }}
              >
                ANGELINA PARKER
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontFamily: "-apple-system", fontWeight: "bold" }}
              >
                Software Developer and Mechanical Engineering student at San
                Diego State University
              </Typography>
            </CardContent>
          </CardActionArea>
        </Paper>
      </Box>

      {/* <Box sx={{ border: "none", flexFlow: "column" }}>
        <Paper elevation={24} sx={paperStyle}>
          <Card>
            <CardContent sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="h5"
                component="div"
                sx={{ fontFamily: "-apple-system" }}
              >
                EDUCATION
              </Typography>
              

              <MEAccordian />
              <ComputerScienceAccordian />
            </CardContent>
          </Card>
        </Paper>
      </Box> */}

      <Box sx={ContentContainerStyle}>
        <Paper
          elevation={18}
          sx={{ flexGrow: "1", ml: "auto", mr: "auto", width: "97%" }}
        >
          
            <CardMedia
              component="img"
              height="25"
              image={MEDPINK}
              alt="...loading..."
            />

            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ fontFamily: "-apple-system", fontWeight: "bold" }}
              >
                EDUCATION
              </Typography>

              <MEAccordian />
              <ComputerScienceAccordian />

            </CardContent>
          
        </Paper>
      </Box>










      <Box sx={ContentContainerStyle}>
        <Paper
          elevation={18}
          sx={{ flexGrow: "1", ml: "auto", mr: "auto", width: "97%" }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="25"
              image={MOREPINK}
              alt="...loading..."
            />

            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ fontFamily: "-apple-system", fontWeight: "bold" }}
              >
                EXPERIENCE
              </Typography>

              <FreelanceAccordian />
              <AppleAccordian />
              

            </CardContent>
          </CardActionArea>
        </Paper>
      </Box>






      

      <Box sx={ContentContainerStyle}>
        <Paper
          elevation={18}
          sx={{ flexGrow: "1", ml: "auto", mr: "auto", width: "97%" }}
        >
          
            <CardMedia
              component="img"
              height="25"
              image={MOSTPINK}
              alt="...loading..."
            />

            <CardContent>

            <Card sx={{ display: "flex", flexDirection: "row" , flexWrap: "wrap", justifyContent: "space-between", }}>
            <BasicCard />
            <Projects/>
            </Card>

              {/* <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ fontFamily: "-apple-system", fontWeight: "bold" }}
              >
                SKILLS AND LANGUAGES
              </Typography> */}

              

            </CardContent>
          
        </Paper>
      </Box>




      <br></br>
      <br></br>
    </>
  );
};

export default Content;
