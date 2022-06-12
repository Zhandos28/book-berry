import { combineReducers } from "redux";
import booksReducer from "./spaces";
import favoritesReducer from "./favorites";
import currentUserReduser from "./currentUser";
import IdReducer from "./id";
import bookReducer from "./space";

const rootReducer = combineReducers({
    books: booksReducer,
    currentUser: currentUserReduser,
    book: bookReducer
});

export default rootReducer;