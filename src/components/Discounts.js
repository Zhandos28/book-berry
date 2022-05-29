import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Grid, Button } from '@mui/material';
import Slider from 'react-slick';
import Book from './Book';
import data from '../data/books';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ArrowButton from './Carousel/ArrowButton';
import './Carousel/carousel.css'

export default function Discounts() {
    const [books, setBook] = useState({items:[]});

    useEffect(() => {
        const fetch = async() => {
            setBook({items:data});
            console.log(books)
            console.log(data)
        }
        fetch()
            .catch(console.error);
    }, []);
    const settings = {
      className: "center",
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
    //   nextArrow: <ArrowButton/>,
    //   prevArrow: <ArrowButton/>,
      swipeToSlide: true,
   
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      };
    return (
        <>
            <Box sx={{backgroundColor:"white", py:"1%"}}>
                <Typography sx={{width:"80%", mx:"auto", py:"1%", textAlign:"center", fontSize:18}}>On our site you can buy books of all genres and topics. Our selections, ratings and reviews are worked directly by publishers' staff, who know firsthand about the needs and preferences of readers. The latest novelties from publishers, world bestsellers, complete series of books by favorite authors.</Typography>
                {/* <Link sx={{}}>*/}
                <Box textAlign='center' >
                    <Button variant='contained' disableElevation
                        sx={{height:"ingerit", color:"white", backgroundImage:"linear-gradient( #00C2FF, #019CF3)", borderRadius:32, width:150}}>
                        More...
                    </Button>
                </Box>
                {/* </Link> */}
            </Box>
            <Box sx={{backgroundColor:"inherit", height:400}}>
                <Typography sx={{color:"white", fontSize:34, my:"3%", textAlign:"center"}}>
                    Discounts
                </Typography>

                <Box sx={{px:"18%",}} className='content'>
                    <Slider {...settings}>
                        {data.map((book, index) => (
                            <Link key={index} to="/book">
                                <Book url={book.cover} title={book.title} author={book.author} score={book.rating}/>
                            </Link>
                        ))}
                    </Slider>
                </Box>
            </Box>
        </>
    )
}
