import changeNumber from "./upDown"
import changeName from "./nameCj"
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    changeNumber,changeName
});

export default rootReducer;