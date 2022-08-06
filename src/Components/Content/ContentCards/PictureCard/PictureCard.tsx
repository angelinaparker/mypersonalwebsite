import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardMedia, Paper } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const MINECRAFT_PNG = require("./minecraft.jpg");
const FLOWERS = require("./flowers.jpg");
const AMERICAN_PSYCHO = require("./ShoddyElementaryGuineapig-max-1mb.gif");
const MULAN = require("./puppet.gif");
const ZOMBIE = require("./zombie.gif");
const pictureCards = [AMERICAN_PSYCHO, MULAN, ZOMBIE];

// Using this example we can dynamically loop through an array to change the current picture on the picture card
// https://felixgerschau.com/react-hooks-settimeout/#:~:text=Conclusion-,How%20to%20use%20setTimeout%20in%20React,log('Initial%20timeout!'

const PictureCard = () => {
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
  const [currentPicture, setCurrentPicture] = useState<typeof pictureCards[0]>(
    pictureCards[currentPictureIndex]
  );
 
  useEffect(()=>{
    const changePictureInterval =  setInterval(()=>{
      if(currentPictureIndex > pictureCards.length-1){
        setCurrentPicture(pictureCards[0]); 
        setCurrentPictureIndex(0);
      }else{
        setCurrentPictureIndex(currentPictureIndex+1);
        setCurrentPicture(pictureCards[currentPictureIndex]); 
      }
    }, 1500)
    return()=> clearInterval(changePictureInterval)
  },[currentPicture, currentPictureIndex])

  return (
    <Paper
      elevation={18}
      sx={{ flexGrow: "1", ml: "auto", mr: "auto", width: "97%" }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={currentPicture}
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
            Software Developer and Mechanical Engineering student at San Diego
            State University
          </Typography>
        </CardContent>
      </CardActionArea>
    </Paper>
  );
};

export default PictureCard;
