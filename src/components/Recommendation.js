import {Box, Typography, Button, InputBase, Grid} from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect, useCallback, useMemo } from 'react';
import booksData from '../data/books';
import Book from './Book';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Search, SearchIconWrapper, StyledInputBase } from '../components/Search/Search';
import {Link} from "react-router-dom";

  
export default function Recommendation({details}) {
    const [activeButton, setActiveButton] = useState("Best seller");
    const [books, setBooks] = useState({items: []});
    const booksType = ["Best seller", "Popular", "News"];
    const [activeChild, setActiveChild] = useState(0);
    const [searchField, setSearchField] = useState("");

    const filteredBooks = details.filter(
      book => {
        return (
          book
          .title
          .toLowerCase()
          .includes(searchField.toLowerCase()) ||
          book
          .author
          .toLowerCase()
          .includes(searchField.toLowerCase())
        );
      }
    );
    const handleChange = e => {
      setSearchField(e.target.value);
    };

    const settings = {
      className: "center",
      // centerMode: true,
      infinite: true,
      centerPadding: "20px",
      slidesToShow: 1,
      speed: 500,
      rows: 2,
      slidesPerRow: 4,
      infinite: true,
      initialSlide: 0,
    };

    const buttonChange = (event) => {
        setActiveButton(event.target.value);
    };

    useEffect(() => {
        // declare the data fetching function
        const fetchData = async () => {
          // const data = await fetch(booksData);
          setBooks({items: booksData});
          // console.log(data);
          console.log(books);
        }
      
        // call the function
        fetchData()
          // make sure to catch any error
          .catch(console.error);
      }, []);
  
  return (
    <Box sx={{display:"block", backgroundImage:"linear-gradient( #00C2FF, #019CF3)", minHeight:550, py:8}}>
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange = {handleChange}
            />
        </Search>
        <Box sx={{display:'flex', my:5, justifyContent:"space-between", width: 340, mx:'37%'}}>
            {
                booksType.map((btn) => (
                    <Button variant='text' 
                    sx={activeButton === btn ? {height:"ingerit", backgroundColor:"inherit", color:"white", outline: "none", fontSize:17, borderRadius:0, borderBottom:"1px solid"}: 
                    {height:"ingerit", backgroundColor:"inherit", color:"white", outline: "none", fontSize:17, borderRadius:0}} key={btn} onClick={buttonChange} value={btn}>{btn}</Button>
                ))
            }
        </Box>
        <Box sx={{px:"21%",}} className='content'>
          <Slider {...settings}>
              {filteredBooks.map((book, index) => (
                  <div key={index} sx={{display:"flex", justifyContent:"spaceBetween", paddingLeft:5}}>
                    <Link to="/book">  
                      <Book url={book.cover} title={book.title} author={book.author} score={book.rating}/>
                    </Link>
                  </div>
              ))}
          </Slider>
        </Box>
    </Box>
  )
}
