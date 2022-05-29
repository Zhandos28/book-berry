import React from 'react';
import {Card, CardActions, CardMedia, CardContent, Rating, Typography, Box} from '@mui/material';

export default function Book({url, title, author, score}) {
    const authorWords = author.split(" ");
  return (
    <Card sx={{display:"block", width:130, px:"auto", backgroundColor:"inherit", border: "none", boxShadow: "none" }}>
        <CardActions sx={{display:"block", padding:0, margin:0, width:130, px:"auto"}}>
            <CardMedia
                component="img"
                height="180"
                image={url}
                title={title}
                sx={{width:128, mx:"auto"}}
            />
            <CardContent sx={{mx:"auto", p:0, textAlign:"left", width:128, color:"white"}}>
                {title.length > 15 ? `${title.substring(0, 15)}...` : title}
            </CardContent>
            <Typography sx={{mx:"auto", width:128, width:128, fontSize:14, color:"white"}}>
                {author.length > 12 ? `${authorWords[0]} ${authorWords[1]}` : author}
            </Typography>
            {/* <Typography sx={{color:"yellow", px:"auto", p:0}}> */}
                <Rating name="half-rating-read" value={parseInt(score)} precision={0.5} readOnly sx={{mx:"auto"}}/>
            {/* </Typography> */}
        </CardActions>
    </Card>
  )
}
