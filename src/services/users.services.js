
import axios from "axios";
import { DOMAIN, MAIN_DOMAIN } from "../utils/config";

export const fetchUsersList = () => {
    return axios.get(`${MAIN_DOMAIN}/users`);
    
}

export const fetchUsersDetail = (id) => {
    return axios.get(`${MAIN_DOMAIN}/users/${id}`);
}

export const addNewUser = (user) => {
    return axios.post(`${MAIN_DOMAIN}/users`, user);
}

export const signInUser = (username, password) => {
    return axios.get(`${MAIN_DOMAIN}/users?username=${username}&password=${password}`);
}