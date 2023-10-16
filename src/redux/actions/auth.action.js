// import { SetData } from "../../src/services/asyncStorage.service";
import axios, { base_axios, setAuthToken } from "./axiosService";


export const LoginUser = (formdata) => async (dispatch) => {
    try {
        // await setAuthToken(axios);


        //  console.log(data)
        dispatch({ type: "POST_CONTACT" });
        const { data } = await axios.post(`/login`, formdata);
        localStorage.setItem("userInfo", JSON.stringify(data));
        dispatch({ type: "POST_CONTACT_SUCCESSFUL", });
        return;
    } catch (error) {

        throw error?.response?.data;
    }
};
export const RegisterUser = (data) => async (dispatch) => {
    try {
        // await setAuthToken(axios);
        data.to_mail = "lab@aussie-mint.com"
        data.company = 'Aussie-mint Gold Refinery'
        data.phone = ""
        //  console.log(data)
        dispatch({ type: "POST_CONTACT" });
        const resposnse = await axios.post(`/register`, data);

        dispatch({ type: "POST_CONTACT_SUCCESSFUL", });
        return;
    } catch (error) {
        console.log(error.response.data)
        throw error.response.data;
    }
};

export const FetchUsers = (data) => async (dispatch) => {

    try {
        // await setAuthToken(axios);
        dispatch({ type: "FETCH_USERS" });
        const { data } = await axios.get(`/users`);
        let payload = data;
        dispatch({ type: "FETCH_USERS_SUCCESSFUL", payload });
        return payload;
    } catch (error) {

        let payload = "error.response.data.message";
        // const { response: { data: { message } } } = error
        dispatch({ type: "FETCH_USERS_FAIL", });
        //// console.log(message);
        throw payload;
    }

};

