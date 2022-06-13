import { combineReducers } from "redux";
import booksReducer from "./books";
import currentUserReduser from "./currentUser";
import bookReducer from "./book";
import basket from './basket';

const rootReducer = combineReducers({
    books: booksReducer,
    currentUser: currentUserReduser,
    book: bookReducer,
    basket: basket
});

export default rootReducer;