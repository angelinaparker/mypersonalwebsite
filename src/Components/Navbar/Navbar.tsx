import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Tooltip,
  Avatar,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import MotionPhotosAutoIcon from "@mui/icons-material/MotionPhotosAuto";
import {
  BoxTypographyAdIcon,
  MenuButtonStyling,
  topAdbIconStyle,
  topTypographyStyle,
} from "./NavBarStyles";
import NavToolBar from "./NavToolBar";

const HeaderImg = require("./original.jpg");
const pages = ["Mystery", "About", "Page3"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {

 

  return (
    <AppBar position="static" color="primary">
      <Container
        maxWidth="xl"
        sx={{ outline: "none", direction: "flex", flexFlow: "flex-end" }}
      >
        <NavToolBar />
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
