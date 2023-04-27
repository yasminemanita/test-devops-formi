import {combineReducers} from "redux";
import authReducer from "./AuthReducer"
const rootReducer=combineReducers({
    authReducer
})
console.log(rootReducer)

export default rootReducer;