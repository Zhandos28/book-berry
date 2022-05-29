import React from 'react';
import {Box, Typography, CardContent, CardActions, CardMedia, Card, Button} from '@mui/material';
import { width } from '@mui/system';
import banner from '../assets/banner.png';

export default function Banner() {
  return (
    <Card sx={{ display: 'flex', flexDirection:"column", minHeight:400 }} style={{backgroundImage: "inherit"}}>
        <Box sx={{ display: 'flex', ml:{md:13, xs:1}}}>
            <CardContent sx={{ display:'block', mt:7}}>
            <Typography component="div" variant="h3" sx={{color:"white", letterSpacing:3}}>
                BookBerry
            </Typography>
            <Typography variant="h4" color="black" component="div" sx={{whiteSpace: "nowrap"}}>
                It`s all you need!
            </Typography>
            <Typography variant="subtitle1" color="white" component="div" sx={{wordBreak:"break-word", maxWidth:{xs:"none",md:300}}}>
                Reading is an exciting world! We will 
                open unexplored worlds for you, give you 
                new emotions, impressions and 
                experience.
            </Typography>
            </CardContent>
            <CardMedia
                component="img"
                height="284"
                image={banner}
                alt="green iguana"
                sx={{mt:6, objectFit: "contain", objectPosition:"right center"}}
            />
        </Box>
        <CardActions position="relative">
            <Button variant="contained" size="large" sx={{ml:{md:14, xs:1, position:"absolute", top:365}, backgroundImage:"linear-gradient( #00C2FF, #019CF3)", borderRadius:32}}>View Library</Button>
        </CardActions>

    </Card>
  )
}
