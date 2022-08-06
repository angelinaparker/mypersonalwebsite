import { Toolbar, Typography } from '@mui/material';
import React from 'react';
import { topTypographyStyle, BoxTypographyAdIcon } from './NavBarStyles';
import MotionPhotosAutoIcon from "@mui/icons-material/MotionPhotosAuto";

export default function NavToolBar() {
    return (
    <Toolbar 
      
      disableGutters>
        <MotionPhotosAutoIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={topTypographyStyle}
        >
          SOFTWARE ENGINEER
        </Typography>

        <MotionPhotosAutoIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
        <Typography
          variant="body1"
          noWrap
          component="a"
          href=""
          sx={BoxTypographyAdIcon}
        >
          SOFTWARE ENGINEER
        </Typography>
      </Toolbar>
    )
}
