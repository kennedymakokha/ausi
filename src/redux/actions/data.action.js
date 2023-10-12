// import { SetData } from "../../src/services/asyncStorage.service";
import axios, { base_axios, setAuthToken } from "./axiosService";


export const getApiData = () => async (dispatch) => {
    try {
        // await setAuthToken(axios);
        dispatch({ type: "FETCH_DATA" });
        const { data } = await base_axios.get(`/`);
        let payload = data;
        dispatch({ type: "FETCH_DATA_SUCCESSFUL", payload });
        return payload;
    } catch (error) {
      //  console.log("ERROR", error)
        let payload = "error.response.data.message";
        // const { response: { data: { message } } } = error
        dispatch({ type: "FETCH_DATA_FAIL", });
        //// console.log(message);
        throw payload;
    }
};
export const contactFormAction = (data) => async (dispatch) => {
    try {
        // await setAuthToken(axios);
        data.to_mail = "lab@aussie-mint.com"
        data.company = 'Aussie-mint Gold Refinery'
        data.phone = ""

        dispatch({ type: "POST_CONTACT" });
        const resposnse = await axios.post(`/mail`, data);

        dispatch({ type: "POST_CONTACT_SUCCESSFUL", });
        return;
    } catch (error) {
      //  console.log(error)
        throw error.response.data;
    }
};

export const AddSubScriberAction = (data) => async (dispatch) => {
    try {
        // await setAuthToken(axios);
        data.to_mail = "lab@aussie-mint.com"
        data.company = 'Aussie-mint Gold Refinery'
        data.phone = ""
      //  console.log(data)
        dispatch({ type: "POST_CONTACT" });
        const resposnse = await axios.post(`/add-subscriber`, data);

        dispatch({ type: "POST_CONTACT_SUCCESSFUL", });
        return;
    } catch (error) {

        throw error.response.data;
    }
};


export const FetchSubScriberAction = (data) => async (dispatch) => {

    try {
        // await setAuthToken(axios);
        dispatch({ type: "FETCH_SUBSCRIBERS" });
        const { data } = await axios.get(`/fetch-subscribers`);
        let payload = data;
        dispatch({ type: "FETCH_SUBSCRIBERS_SUCCESSFUL", payload });
        return payload;
    } catch (error) {
       
        let payload = "error.response.data.message";
        // const { response: { data: { message } } } = error
        dispatch({ type: "FETCH_SUBSCRIBERS_FAIL", });
        //// console.log(message);
        throw payload;
    }

};

