import React from 'react';
import {Box} from '@mui/material';
import Banner from '../components/Banner';
import QuoteCarousel from '../components/QuoteCarousel';
import Recommendation from '../components/Recommendation';
import Discounts from '../components/Discounts';
import Sponsor from '../components/Sponsor';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Home({data, activeBtn, changeBtn}) {
  return (
    <div style={{backgroundImage:"linear-gradient( #00C2FF, #019CF3)"}}>
        <Header activeBtn changeBtn/>
        <Banner/> 
        <QuoteCarousel/>
        <Recommendation details={data}/>
        <Discounts/>
        <Sponsor/>
        <Footer/>
    </div>
  )
}
