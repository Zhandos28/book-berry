import * as React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function FAQ({activeBtn, changeBtn}) {
    const faq = [
        {
            id: "1",
            question: "Where do you deliver?",
            answer: "You can receive your order through the nearest post office or choose a private courier to deliver to your home.",
        },
        {
            id: "2",
            question: "Where do you deliver?",
            answer: "You can receive your order through the nearest post office or choose a private courier to deliver to your home.",
        },
        {
            id: "3",
            question: "Where do you deliver?",
            answer: "You can receive your order through the nearest post office or choose a private courier to deliver to your home.",
        },
        {
            id: "4",
            question: "Where do you deliver?",
            answer: "You can receive your order through the nearest post office or choose a private courier to deliver to your home.",
        }
    ]
  return (
    <div style={{backgroundImage:"linear-gradient( #00C2FF, #019CF3)"}}>
        <Header activeBtn={activeBtn} changeBtn={changeBtn}/>
        <Typography sx={{fontSize:24, fontWeight:500, display:"flex", justifyContent:"center", my:"2%"}}>
            Frequently Asked Questions
        </Typography>
        <Box sx={{minHeight:270, mx:"5%"}}>
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