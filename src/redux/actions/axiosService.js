import axios from "axios";
// import { getData } from "../../src/services/asyncStorage.service";

const axiosService = axios.create({
    // baseURL: `https://www.goldapi.io/api/XAU/USD`,

    baseURL: "http://localhost:4000/api",
    // baseURL: "https://marapesa.com/api/",
    timeout: 20000,
    headers: {
        "Content-Type": "application/json",
        "x-access-token": "goldapi-1pgf6rlmylsbqq-io",
    },
});
export const base_axios = axios.create({
    baseURL: `https://www.goldapi.io/api/XAU/USD`,


    // baseURL: "https://213b-102-0-0-246.in.ngrok.io",
    timeout: 20000,
    headers: {
        "Content-Type": "application/json",
        "x-access-token": "goldapi-1pgf6rlmylsbqq-io",
    },
});

export const setAuthToken = async (instance) => {
    let user = localStorage.getItem("userInfo")
    let userInfo = JSON.parse(user)
    const { token } = userInfo;
    if (token) {
        instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete instance.defaults.headers.common["Authorization"];
    }
};

// singleton instance
export default axiosService;