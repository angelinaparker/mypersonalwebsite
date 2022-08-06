import { SxProps, Theme } from "@mui/material";

export const FrontPageStyles: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: 5,
};

export const ContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  "& > :not(style)": {
    m: 1,
    width: 128,
    height: 128,
  },
};

export const PictureCardStyles = {
     maxWidth: 350,
     display: "center" 
  }; 