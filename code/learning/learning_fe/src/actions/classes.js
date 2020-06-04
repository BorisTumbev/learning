import {
GET_CLASSES
} from "./types";
import axios from 'axios';


export const getClasses = () => {

    return dispatch => {
        axios.get('/api/school_classes')
        .then(res =>{
            dispatch({
                type: GET_CLASSES,
                payload: res.data
            });
        })
        .catch(err => {
            console.log(err)
        })
    }
}
