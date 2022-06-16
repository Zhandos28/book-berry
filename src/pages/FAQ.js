import * as React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function FAQ({activeBtn, changeBtn}) {
    const faq = [
        {
            id: "1",
            question: "Why may some products be missing photos?",
            answer: "We constantly update our assortment so that you receive the most modern products and services at the best prices. Therefore, we are also working on filling the catalog on the website with photos and information.",
        },
        {
            id: "2",
            question: "How to create a list of favorite products? ",
            answer: "Favorites - a personal section where you can save your favorite products and monitor the sale or price changes. To add a product to your favorites, click on the heart-shaped icon on the product card.",
        },
        {
            id: "3",
            question: "I saw an inaccuracy in the description or in the characteristics of the product. What to do?",
            answer: "We will be grateful if you leave your feedback and wishes and send them to the email address shop@bookberry.com. Our specialists will correct the found error as soon as possible.",
        },
        {
            id: "4",
            question: "What is the delivery time of the order?",
            answer: "It all depends on your location and the chosen delivery method. When placing an order, the estimated delivery date will be indicated in the shopping cart.",
        },
        {
            id: "5",
            question: "How long can I return the product?",
            answer: "The term for the return of goods of good quality is 14 days from the date of receipt.",
        }
    ]
  return (
    <div style={{backgroundImage:"linear-gradient(to right, #00C2FF, #019CF3)"}}>
        <Typography sx={{fontSize:24, fontWeight:500, display:"flex", justifyContent:"center", py:"2%"}}>
            Frequently Asked Questions
        </Typography>
        <Box sx={{minHeight:270, mx:"5%", pb: "50px"}}>
            {
                faq.map((data) => (
                    <Accordion sx={{backgroundColor:"inherit", color:"white", mt:"1%", }} key={data.id}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>{data.id}. {data.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            {data.answer}
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))
            }
        </Box>    
      <Footer/>
    </div>
  )
}