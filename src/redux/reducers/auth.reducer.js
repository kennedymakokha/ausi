const initialState = {
    errors: [],
    users: [],
    error: "",


    loading: false,
};

export default function store(state = initialState, action) {

    switch (action.type) {

        case "FETCH_USERS":
            return {
                ...state,
                loading: true,
            };
        case "FETCH_USERS_SUCCESSFUL":
            return {
                ...state,
                loading: false,
                users: action.payload,
            };
        case "FETCH_USERS_FAIL":
            return {
                ...state,
                loading: true,
                error: action.payload,
            };






        default:
            return state;
    }
}