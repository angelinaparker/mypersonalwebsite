import { Toolbar, Typography } from "@mui/material";
import React from "react";
import { topTypographyStyle, BoxTypographyAdIcon } from "./NavBarStyles";
import MotionPhotosAutoIcon from "@mui/icons-material/MotionPhotosAuto";
import { Box } from "@mui/system";

const mylogo = require("./mylogo.png");

export default function NavToolBar() {
  return (
    <Toolbar disableGutters>
      <Box maxWidth="2" maxHeight="2" sx={{ maxWidth: "2", maxHeight: "2", ml: "2"}}>
        <img className="resize" src={mylogo} />
      </Box>

      <Typography
        variant="h4"
        noWrap
        component="a"
        href="/"
        sx={{
          m: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "PlayfairDisplay",
          fontWeight: 800,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        ANGELINA PARKER
      </Typography>

      <Typography
        variant="body1"
        noWrap
        component="a"
        href=""
        sx={{
          m: 2,
          display: { xs: "flex", md: "none" },

          fontFamily: "PlayfairDisplay",
          fontSize: 27,
          fontWeight: 800,
          letterSpacing: ".1rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        ANGELINA PARKER
      </Typography>
    </Toolbar>
  );
}
