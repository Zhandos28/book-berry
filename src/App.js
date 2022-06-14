import React from 'react';
import { useDispatch } from 'react-redux';
import {setBooks} from './redux/actions/books';
import bookController from './services/CRUD-services/Book-Controller';
import AppRouter from './route/AppRouter';
import Header from './components/Header';
import RequireAuth from './route/RequireAuth';

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    bookController.getBooks().then(result => {
      dispatch(setBooks(result));
    });
  });
  return (
    <div className="App" >
      <RequireAuth>
        {/* <GetContent /> */}
        <Header/>
      </RequireAuth>
      <AppRouter />
    </div>
  );
}

export default App;
