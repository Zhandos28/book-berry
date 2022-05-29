import React from 'react';
import Header from './components/Header';
import Account from './pages/Account';
import BookList from './pages/BookList';
import BookPage from './pages/BookPage';
import FAQ from './pages/FAQ';
import Home from './pages/Home';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import data from './data/books';

function App() {
  const [activeBtn, setActiveBtn] = React.useState(null);
  const changeBtn = (event) => {
    setActiveBtn(event.target.value);
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home data={data} activeBtn changeBtn/>} exact/>{/* <Home/> */}
          <Route path='/faq' element={<FAQ activeBtn changeBtn/>} exact/>{/* <FAQ/> */}
          <Route path='/books' element={<BookList details={data} activeBtn changeBtn/> } exact/>{/* <BookList/> */}
          <Route path='/book' element={<BookPage activeBtn changeBtn/>} exact/>{/* <BookPage/> */}
          <Route path='/account' element={<Account activeBtn changeBtn/>} exact/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
