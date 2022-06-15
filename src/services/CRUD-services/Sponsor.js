import axios from "axios";
import headers from "./Headers";

const API_URL = headers.API_URL;
const config = headers.config;

const getSponsor = async () => {
    return await axios.get(API_URL + "/brand-company", config).then(response => {
        if(response) {
            return response.data;
        }
    });
};

const sponsorController = {
    getSponsor,
}

export default sponsorController;