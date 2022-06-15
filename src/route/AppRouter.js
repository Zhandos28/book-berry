import React from 'react';
import {
    Route,
    Routes 
  } from "react-router-dom";
import Home from '../pages/Home';
import BookList from '../pages/BookList';
import FAQ from '../pages/FAQ';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Basket from '../pages/Basket';
import PostBook from '../pages/PostBook';
import BookPage from '../pages/BookPage';
import Account from '../pages/Account';
import Checkout from '../pages/Checkout';
import IncomingApplications from '../pages/IncomingApplications';


const AppRouter = () => {
    return (
        <Routes >
            <Route  path="/signin" exact  element={<SignIn />} />
            <Route  path="/signup" exact  element={<SignUp />} />
            <Route  path="/" exact  element={
                <Home />
            }/>
            <Route  path="/books" exact  element={
                <BookList />
            } />
            <Route  path="/faq" exact  element={
                <FAQ /> 
            } />
            <Route  path="/basket" exact  element={
                <Basket /> 
            } />
            <Route  path="/account" exact  element={
                <Account /> 
            } />
            <Route  path="/book" exact  element={
                <BookPage />
            } />
            <Route  path="/book/post" exact  element={
                <PostBook />
            } />
            <Route  path="/checkout" exact  element={
                <Checkout />
            } />
            <Route  path="/applications" exact  element={
                <IncomingApplications />
            } />
            <Route
                path="*"
                element={
                    <main>
                        <p className='text-center mt-64 text-2xl font-semibold'>There's nothing here!</p>
                    </main>
                }   
            />
        </Routes>
    );
};

export default AppRouter;