import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Accordian from "../Accordian/Accordian";
import { Link, Route } from "react-router-dom";
import { Paper } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

interface BasicCardProps {
  word?: string;
}

export default function BasicCard({ word }: BasicCardProps) {
  return (
    <Paper elevation={24} sx={{ flexGrow: "1", ml: "auto", mr: "auto", width: "97%",}}>
    <Card  >
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {"Angelina"}
        </Typography> */}
        <Typography variant="h5" component="div" sx={{ fontFamily: "-apple-system"}}>
          EDUCATION
        </Typography>
        <br></br>
        <Box sx = {{display: "flex", flexDirection: "row", flexGrow: 1, border: "solid blue"}}> 
        <Accordian /> </Box>
      </CardContent>
      <CardActions>
        
          < Button size="small"> <a style={{ textDecoration: 'none' }}href="https://mechanical.sdsu.edu/undergraduate/bsme"> Learn More </a> </Button>
        
      </CardActions>
    </Card>
    </Paper>
  );
}
