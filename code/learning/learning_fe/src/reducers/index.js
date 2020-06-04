import { combineReducers } from "redux";
import auth from "./auth";
import classes from "./classes";
import lessons from "./lessons";


export default combineReducers({
    auth,
    classes,
    lessons,
});
