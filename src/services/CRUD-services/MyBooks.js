import axios from "axios";
import headers from "./Headers";
import AuthService from "../auth-services/Auth.service";

const API_URL = headers.API_URL;
const config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + AuthService.getCurrentUser()
    }
}

const postNewFavorites = async (data) => {
    return await axios.post(API_URL + "/favorite", data, config).then(response => {
        if(response) {
            return response.data;
        }
    }).catch(error => {
        console.log(error);
    });
};

const getFavorites = async () => {
    return await axios.get(API_URL + "/favorite", config).then(response => {
        if(response) {
            return response.data.result;
        }
    }).catch(error => {
        console.log(error);
    });
};

const getUserFavorites = async (id) => {
    return await axios.get(API_URL + "/favorite/user/" + id, config).then(response => {
        if(response) {
            return response.data.result;
        }
    }).catch(error => {
        console.log(error);
    });
};

const deleteFavorite = async (id) => {
    return await axios.delete(API_URL + "/favorite/" + id, config).then(response => {
        if(response) {
            return response;
        }
    }).catch(error => {
        console.log(error);
    });
}

const favoriteController = {
    postNewFavorites,
    deleteFavorite,
    getFavorites,
    getUserFavorites
}

export default favoriteController;