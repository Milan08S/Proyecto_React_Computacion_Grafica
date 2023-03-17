import { combineReducers } from "redux";
import formacionReducer from "./formaciones";

const allReducers = combineReducers({
    formacion: formacionReducer
});

export default allReducers;