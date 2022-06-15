import axios from "axios";
import headers from "./Headers";
import authService from "../auth-services/Auth.service";

const API_URL = headers.API_URL;
const config = headers.config;

const getCurrentUser = async () => {
    return await axios.get(API_URL + "/user/current-user", config).then(response => {
        if(response) {
            return response.data;
        }
    }).catch(error => {
        if (error) {
            authService.removeCurrentUser();
            window.location.reload();
        }
    });
}

const getUserById = async (id) => {
    return await axios.get(API_URL + "/user/" + id, config).then(response => {
        if(response) {
            return response.data;
        }
    });
}

const checkUserName = async (userName) => {
    return await axios.get(API_URL + "/user/exists/" + userName).then(response => {
        if(response) {
            return response.data;
        }
    });
}

const editUser = async (data) => {
    return await axios.put(API_URL + "/user", data, config).then(response => {
        if(response) {
            return {data: response.data, status: response.status};
        }
    });
}

const userController = {
    getCurrentUser,
    getUserById,
    checkUserName,
    editUser
}

export default userController;