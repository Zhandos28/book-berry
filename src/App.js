import React from 'react';
import { useDispatch } from 'react-redux';
import {setBooks} from './redux/actions/books';
import bookController from './services/CRUD-services/Book-Controller';
import AppRouter from './route/AppRouter';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    bookController.getBooks().then(result => {
      dispatch(setBooks(result));
    });
  });
  return (
    <div className="App" >
      {/* <RequireAuth>
        <GetContent />
      </RequireAuth> */}
      <Header/>
      <AppRouter />
    </div>
  );
}

export default App;
