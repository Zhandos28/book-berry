import axios from "axios";

const API_URL = "https://6b48-37-99-36-176.eu.ngrok.io";
const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

const signin = async(email, password) => {
    return await axios.post(API_URL + "/auth/signin", {
        "login": email,
        "password": password
      }).then(response => {
        if (response) {
            localStorage.setItem("user", JSON.stringify(response.data.token));
            return response.data;
        }
    }).catch(error => {
        console.log(error);
    });
};

const signup = async (email, password, fullName, userName, phone) => {
    return await axios.post(API_URL + "/auth/signup", {
        email: email,
        password: password,
        firstName: fullName.split(" ")[0],
        lastName: fullName.split(" ")[1],
        mobileNumber: phone,
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
    localStorage.removeItem("user");
};

const authService = {
    signup,
    signin,
    signout,
    getCurrentUser,
    removeCurrentUser
};

export default authService;