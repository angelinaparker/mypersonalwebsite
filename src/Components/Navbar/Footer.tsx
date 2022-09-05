import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Paper
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 0.5
          }}
        >
          <Typography variant="caption" color="initial" display={"block"}>
            <a href="https://goo.gl/maps/NjpS9hAgu8U6qqXN8">
              325 South Moorpark Road, Thousand Oaks, CA 91361
            </a>
          </Typography>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 0.5
          }}
        >
          <Typography
            variant="caption"
            color="initial"
            display={"block"}
            gutterBottom
          >
            805-371-5276 | <a href="mailto:info@rogerthaidds.com">info@rogerthaidds.com</a> | Copyright 2022
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
};

export default Footer;
