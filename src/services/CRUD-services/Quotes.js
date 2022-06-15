import axios from "axios";
import headers from "./Headers";

const API_URL = headers.API_URL;
const config = headers.config;

const getQuotes = async () => {
    return await axios.get(API_URL + "/quotes", config).then(response => {
        if(response) {
            return response.data;
        }
    }).catch(error => {
        console.log(error);
    });
};

const quotesController = {
    getQuotes,
}

export default quotesController;