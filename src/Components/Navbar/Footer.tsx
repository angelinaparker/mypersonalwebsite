import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
    return (
      <Paper sx={{
      width: '100%',
      position: 'fixed',
      bottom: 0,
      
      }} component="footer" square variant="outlined">
        <Container maxWidth="lg">
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: "flex",
              my:0.5
            }}
          >

          </Box>
  
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: "flex",
              mb: 0.5,
            }}
          >
            <Typography variant="caption" color="initial">
              Copyright ©2022. AngelinaParker
            </Typography>
          </Box>
        </Container>
      </Paper>
    );
  }

  export default Footer;
  