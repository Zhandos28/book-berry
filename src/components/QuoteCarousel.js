import React, { useCallback, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import {Typography, Box} from "@mui/material";
import { height, maxHeight, width } from "@mui/system";
import quotesController from "../services/CRUD-services/Quotes";

function QuoteCarousel() {
  // State to programmatically set active child
  const [activeChild, setActiveChild] = useState(0);

  // Basically items = [1, 2, 3, 4]
  const [items, setItems] =  useState([]);

  useEffect(() => {
    quotesController.getQuotes().then(r => {
      if (r) setItems([...r])
    })
  }, []);

  // The Keypress Event Handler
  const changeChild = useCallback(
    (e) => {
      if (e.key === "ArrowLeft") {
        // If supposed previous child is < 0 set it to last child
        setActiveChild((a) => (a - 1 < 0 ? items.length - 1 : a - 1));
      } else if (e.key === "ArrowRight") {
        // If supposed next child is > length -1 set it to first child
        setActiveChild((a) => (a + 1 > items.length - 1 ? 0 : a + 1));
      }
    },
    [items]
  );

  // Set and cleanup the event listener
  useEffect(() => {
    document.addEventListener("keydown", changeChild);

    return function cleanup() {
      document.removeEventListener("keydown", changeChild);
    };
  });

  return (
      <Box sx={{height:{xs:"auto", md:150}, backgroundColor:"white"}}>
      <Carousel
        index={activeChild} // <-- This controls the activeChild
        autoPlay={false} // <-- You probaly want to disable this for our purposes
        navButtonsAlwaysVisible
        navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
            style: {
                backgroundColor: 'white',
                borderRadius: 0,
                color: "black",
                height: 25,
                width: 25,
                mt: {sm:1, md:0}
            }
        }} 
        indicatorIconButtonProps={{
            style: {
                backgroundColor: 'white',
                color: "white"       // 3
            }
        }}
    
        sx={{height:"auto", backgroundColor:"white", mx:'5%', px:7, py:3}}
      >
        {items.map((item) => {
          return (
            <Typography align="center" variant="h6" key={item.id} sx={{mt:{sm:"1%", md:"2%"}}}>
              {item.name} - {item.author}
            </Typography>
          );
        })}
      </Carousel>
      </Box>
  );
}

export default QuoteCarousel;
