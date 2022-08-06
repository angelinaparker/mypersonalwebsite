import React from "react";
import Paper from "@mui/material/Paper";
import BasicCard from "../Components/BasicCard";


export const wordsArr = [
    "Education",
    "Projects",
    "Hobbies",
    "Projects",
  ];

  export const generateCards = (arr: string[], elevationSize:number) => {
    let cards = [];
    for (let i = 0; i < arr.length; i++) {
      cards.push(
        <Paper elevation={elevationSize}>
          <BasicCard word={arr[i]} />
        </Paper>
      );
    }
    return cards;
  };