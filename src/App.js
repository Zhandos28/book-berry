import React from 'react';
import AppRouter from './route/AppRouter';
import Header from './components/Header';
import RequireAuth from './route/RequireAuth';
import GetAccaunt from './components/GetContent/GetAccount';

function App() {
  return (
    <div className="App" >
      <RequireAuth>
        <GetAccaunt />
        <Header/>
      </RequireAuth>
      <AppRouter />
    </div>
  );
}

export default App;
