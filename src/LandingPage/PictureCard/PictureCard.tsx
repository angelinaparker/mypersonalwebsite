import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Paper } from "@mui/material";
import { FrontPageStyles, PictureCardStyles } from "../LandingPageContent/LandingPageStyles";
import { topTypographyStyle } from "../../Components/Navbar/NavBarStyles";

const MyHeader = require("./flowers.jpg");

const PictureCard = () => {
  return (
    <Paper elevation={18} sx={{ flexGrow: "1", ml: "auto", mr: "auto", width: "97%",}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={MyHeader}
          alt="... loading..."
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
