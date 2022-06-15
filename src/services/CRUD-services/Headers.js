import AuthService from "../auth-services/Auth.service";

const API_URL = "https://0850-37-99-39-21.eu.ngrok.io";
const config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + AuthService.getCurrentUser()
    }
}

const headers = {
    API_URL,
    config
};

export default headers;