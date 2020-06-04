import {
GET_LESSONS
} from "./types";
import axios from 'axios';


export const getLessons = (id) => {

    return dispatch => {
        axios.get(`/api/lessons/${id}`)
        .then(res =>{
            dispatch({
                type: GET_LESSONS,
                payload: res.data
            });
        })
        .catch(err => {
            console.log(err)
        })
    }
}
