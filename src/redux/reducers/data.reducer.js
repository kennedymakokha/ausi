const initialState = {
    errors: [],
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


        default:
            return state;
    }
}