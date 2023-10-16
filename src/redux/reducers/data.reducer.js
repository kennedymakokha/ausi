const initialState = {
    errors: [],
    subscribers: [],
    feedBacks: [],
    error: "",

    prices: {},

    loading: false,
};

export default function store(state = initialState, action) {

    switch (action.type) {

        case "FETCH_DATA":
            return {
                ...state,
                loading: true,
            };
        case "FETCH_DATA_SUCCESSFUL":
            return {
                ...state,
                loading: false,
                prices: action.payload,
            };
        case "FETCH_DATA_FAIL":
            return {
                ...state,
                loading: true,
                error: action.payload,
            };
        case "FETCH_FEEDBACKS":
            return {
                ...state,
                loading: true,
            };
        case "FETCH_FEEDBACKS_SUCCESSFUL":
            return {
                ...state,
                loading: false,
                feedBacks: action.payload,
            };
        case "FETCH_FEEDBACKS_FAIL":
            return {
                ...state,
                loading: true,
                error: action.payload,
            };

        case "FETCH_SUBSCRIBERS":
            return {
                ...state,
                loading: true,
            };
        case "FETCH_SUBSCRIBERS_SUCCESSFUL":
            return {
                ...state,
                loading: false,
                subscribers: action.payload,
            };
        case "FETCH_SUBSCRIBERS_FAIL":
            return {
                ...state,
                loading: true,
                error: action.payload,
            };


        case "POST_CONTACT":
            return {
                ...state,
                loading: true,
            };
        case "POST_CONTACT_SUCCESSFUL":
            return {
                ...state,
                loading: false,
                prices: action.payload,
            };
        case "POST_CONTACT_FAIL":
            return {
                ...state,
                loading: true,
                error: action.payload,
            };




        default:
            return state;
    }
}