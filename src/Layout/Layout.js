import React from 'react'
import { Grid, Container } from '@material-ui/core'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';


const Layout = () => {
  return (
    <div>
        <Grid container spacing={0} direction="row" align='center' justify='center' >
            <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://pngimage.net/wp-content/uploads/2018/05/corporate-training-png-1.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Company
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Company login space for shortlisting of colleges and recruitment of students.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card> 
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.careergirls.org/wp-content/uploads/2018/06/College-Administrator_1920x1080.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            College
          </Typography>
          <Typography variant="body2" color="text.secondary">
            College login space for college admin to input placement details about the college.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card> 
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.karenyourcareercoach.com.au/wp-content/uploads/2022/01/university-students.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Student
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Students login space to view and compare colleges, sit for placement and skill dev.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card> 
            </Grid>
        </Grid>
    </div>
  )
}

export default Layout