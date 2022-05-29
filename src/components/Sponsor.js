import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import bkg from '../assets/background.png'

const data = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSegJDXLdD91hqZ5UJZ4qDKYRtPKrRP_NvLmQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpV57qypNP_p68ZK7PqdosJnbHESaGcwC9mw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG2Ze14yEKhxg4ZoA69xEfTsCaxj4tCNDhYQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr14WBTkL61E_zK8HqYKzHdzHUKmZoT6hdFQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2pRGXU1mfqqJ_o0xjF7orNlabFci4T8nFqw&usqp=CAU"
]
function ArrowButton(props) {
    const { className, style, onClick } = props;
    return (
      <span
        className={className}
        style={{ ...style, display: "block", background: "#a39f9e", marginButton:20, borderRadius:"32px"}}
        onClick={onClick}
      />
    );
  }

export default function Sponsor() {
    
    const settings = {
      className: "center",
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <ArrowButton/>,
      prevArrow: <ArrowButton/>,
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
            <Box sx={{backgroundColor:"white", py:"3%"}}>
                <Box sx={{px:"18%",}} className='content'>
                    <Slider {...settings}>
                        {data.map((book, index) => (
                            <div key={index}>
                                <img src={book} style={{width:"130px",height: "130px"}}/>
                            </div>
                        ))}
                    </Slider>
                </Box>
            </Box>     
            {/* <div style={{margin:0, padding:0, height:300, backgroundImage:`url(${bkg})`, backgroundRepeat:"no-repeat", backgroundOrigin:"border-box", backgroundSize:"100% 300px"}}>
            </div>  */}
        </>
    )
}
