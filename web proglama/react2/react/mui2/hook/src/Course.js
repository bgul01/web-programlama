import React from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


function Course  ({image,title,description}) {
  return( 
    <Card >
    <CardMedia
      sx={{ height: 140 }}
      image={image}
      title="kurslarım"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
      {description}
      </Typography>
    </CardContent>
    
  </Card>
 
    );

  }
export default Course;