import axios from "axios";
import headers from "./Headers";
import AuthService from "../auth-services/Auth.service";

const API_URL = headers.API_URL;
const config = headers.config

const getFileUrl = (data) => {
    return axios.post(API_URL + "/fs/upload", data, config).then(response => {
        if(response) {
            return response.data;
        }
    }).catch(error => {
        console.log(error);
    });
};


const fileUpload = {
    getFileUrl
}

export default fileUpload;