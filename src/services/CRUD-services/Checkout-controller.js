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

const postCheckout = async (data) => {
    return await axios.post(API_URL + "/checkout", data, config).then(
        response => {
            return response.status;
        }
    );
};


const checkoutController = {
    postCheckout,
};

export default checkoutController;