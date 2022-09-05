import { createTheme, ThemeProvider, Toolbar, Typography } from "@mui/material";
import React from "react";
import { topTypographyStyle, BoxTypographyAdIcon } from "./NavBarStyles";
import MenuIcon from "@mui/icons-material/Menu";
import Grid from "@mui/material/Grid";
// import Grid from "@mui/system/Unstable_Grid";
const headerTheme = createTheme({
  palette: {
    text: {
      primary: "#E0D9BC"
    }
  },
  typography: {
    fontFamily: "PlayfairDisplay",
    
  }
});

export default function NavToolBar() {
  return (
    <Toolbar>
      <Grid
        container
        spacing={0}
        justifyContent="space-between"
        alignItems={"center"}
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        {/* <Grid item>
          <MenuIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        </Grid> */}

        <Grid item >
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              
              display: { xs: "none", md: "flex" },
              fontFamily: "PlayfairDisplay",
              fontWeight: 800,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Roger Thai D.D.S.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={0}
        justifyContent={"center"}
        alignItems={"center"}
        
        sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
      >
        <Grid item justifyContent={"center"} >
          <ThemeProvider theme={headerTheme}>
            
            <Typography
            
            noWrap
            component="a"
            href=""
            sx={{
              m: 0,
              display: { xs: "flex", md: "none" },
              alignContent:"center",
              fontFamily: "PlayfairDisplay",
              fontSize: 38,
              fontWeight: 800,
              letterSpacing: ".2rem",
            color: "inherit",
              textDecoration: "none",
            }}
          >
            Roger Thai D.D.S.
          </Typography>
          </ThemeProvider>
        </Grid>
      </Grid>
    </Toolbar>
  );
}
