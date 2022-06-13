import axios from "axios";
import headers from "./Headers";

const API_URL = headers.API_URL;
const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

const getPartners = async () => {
    return await axios.get(API_URL + "/quotes", config).then(response => {
        if(response) {
            return response.data.result;
        }
    }).catch(error => {
        console.log(error);
    });
};

const partnersController = {
    getPartners,
}

export default partnersController;