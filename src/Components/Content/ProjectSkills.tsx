import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Projects() {
  return (
    <Card sx={{ width: "49%"}}>
      <CardContent>
        <Typography variant="h6" component="div" fontWeight="bold">
          TECHNOLOGIES
        </Typography>
        <br></br>
        <Typography variant="body2">
          Visual Studio Code, BASH Terminal, AWS, Node/Npm
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
  );
}
