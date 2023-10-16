import DataReducer from "./data.reducer";
import UserReducer from "./auth.reducer";


const baseReduce = {

    priceDetails: DataReducer,
    userDetails: UserReducer,

};

export default baseReduce;