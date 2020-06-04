import {
GET_LESSONS
} from "../actions/types";

import {updateObject} from "../utils";

const initialState = {
    lessons: []
}



const getLessons = (state, action) => {
    return updateObject(state, {
        lessons: action.payload,
    });
}


const reducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_LESSONS: return getLessons(state, action);
        default:
            return state;
    }
}

export default reducer;
