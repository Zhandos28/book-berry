import React from 'react';
import Banner from '../components/Banner';
import QuoteCarousel from '../components/QuoteCarousel';
import Recommendation from '../components/Recommendation';
import Discounts from '../components/Discounts';
import Sponsor from '../components/Sponsor';
import Footer from '../components/Footer';
import authService from '../services/auth-services/Auth.service';

export default function Home() {
  if (!authService.getCurrentUser()) {
    authService.removeCurrentUser()
    window.window.location.href = "/signin";
  }
  
  return (
    <div style={{backgroundImage:"linear-gradient(to right, #00C2FF, #019CF3)"}}>
        <Banner/> 
        <QuoteCarousel/>
        <Recommendation/>
        <Discounts/>
        <Sponsor/>
        <Footer/>
    </div>
  )
}
