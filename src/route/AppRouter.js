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