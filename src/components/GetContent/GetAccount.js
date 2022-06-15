import React from 'react';
import { useDispatch } from 'react-redux';
import {setBooks} from '../../redux/actions/books';
import bookController from '../../services/CRUD-services/Book-Controller';

const GetFavorite = () => {
    const dispatch = useDispatch();
    React.useEffect(() => {
        bookController.getBooks().then(result => {
        dispatch(setBooks(result));
        });
    });

    return (
        <></>
    );
};

export default GetFavorite;