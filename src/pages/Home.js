import React from 'react';
import {Box} from '@mui/material';
import Banner from '../components/Banner';
import Header from '../components/Header';
import QuoteCarousel from '../components/QuoteCarousel';
import Recommendation from '../components/Recommendation';
import Discounts from '../components/Discounts';
import Sponsor from '../components/Sponsor';
import Footer from '../components/Footer';

export default function Home({data, activeBtn, changeBtn}) {
  return (
    <div style={{backgroundImage:"linear-gradient( #00C2FF, #019CF3)"}}>
        <Header activeBtn={activeBtn} changeBtn={changeBtn}/>
        <Banner/> 
        <QuoteCarousel/>
        <Recommendation details={data}/>
        <Discounts/>
        <Sponsor/>
        <Footer/>
    </div>
  )
}
