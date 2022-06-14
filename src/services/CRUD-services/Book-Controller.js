import axios from "axios";
import AuthService from "../auth-services/Auth.service";
import headers from "./Headers";

const API_URL = headers.API_URL;
const config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + AuthService.getCurrentUser()
    }
}

const getBooks = async () => {
    return await axios.get(API_URL + "/books", config).then(response => {
        if(response) {
            return response.data;
        }
    })
};

const getMyBooks = async () => {
    return await axios.get(API_URL + "/books/findByUser", config).then(response => {
        if(response) {
            return response.data;
        }
    })
};

const postNewBook = async (data) => {
    return await axios.post(API_URL + "/books", data, config).then(
        response => {
            return response;
        }
    );
};

const removeBook = async (id, data) => {
    return await axios.delete(API_URL + "/books/" + id, config).then(
        response => {
            return response.status;
        }
    ).catch(error => {
        console.log(error);
    });
};

const addCommentToBook = async (id, data) => {
    return await axios.post(API_URL + "/books/" + id + "/add-comment", data, config).then(
        response => {
            return response.data;
        }
    ).catch(error => {
        console.log(error);
    });
};


const bookController = {
    getBooks,
    getMyBooks,
    postNewBook,
    addCommentToBook,
    removeBook
};

export default bookController;