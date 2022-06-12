import axios from "axios";

const API_URL = "https://parkingkz.herokuapp.com/auth";
const config = {
    headers: {
        'Content-Type': 'application/json',
    }
}

const signin = async (telephone, password) => {
    return await axios.post(API_URL + "/signin", {
        username: telephone,
        password: password,
    }, config).then(response => {
        if (response) {
            localStorage.setItem("user", JSON.stringify(response.data.token));
        }

        return response.data;
    });
};

const signup = async (telephone, password) => {
    return await axios.post(API_URL + "/signup", {
        username: telephone,
        password: password,
    }).then((response) => {
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
    });
};

const signout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const removeCurrentUser = () => {
    localStorage.removeItem("user");;
};

const authService = {
    signup,
    signin,
    signout,
    getCurrentUser,
    removeCurrentUser
};

export default authService;