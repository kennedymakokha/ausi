// import { SetData } from "../../src/services/asyncStorage.service";
import axios, { setAuthToken } from "./axiosService";


export const getApiData = () => async (dispatch) => {
    try {
        // await setAuthToken(axios);
        dispatch({ type: "FETCH_DATA" });
        const {data} = await axios.get(`/`);
        let payload = data;
        dispatch({ type: "FETCH_DATA_SUCCESSFUL", payload });
        return payload;
    } catch (error) {
        console.log("ERROR", error)
        let payload = "error.response.data.message";
        // const { response: { data: { message } } } = error
        dispatch({ type: "FETCH_DATA_FAIL",  });
        // console.log(message);
        // throw payload;
    }
};
