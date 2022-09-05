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
import NavToolBar from "./NavToolBar";

const pages = ["Mystery", "About", "Page3"];
const containerStyle = { outline: "none", direction: "flex", flexFlow: "flex-end" }

const ResponsiveAppBar = () => {

  return (
    <AppBar position="static" color="primary">
      <Container
        maxWidth="xl"
        sx={containerStyle}
      >
        <NavToolBar />
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;