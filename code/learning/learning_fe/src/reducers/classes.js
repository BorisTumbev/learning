import {
GET_CLASSES
} from "../actions/types";

import {updateObject} from "../utils";

const initialState = {
    classes: []
}



const getClasses = (state, action) => {
    return updateObject(state, {
        classes: action.payload,
    });
}


const reducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_CLASSES: return getClasses(state, action);
        default:
            return state;
    }
}

export default reducer;
