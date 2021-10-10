import { ADD_TO_COMPARE } from './actionTypes'


function addToCompare(device) {
    return { 
        type: ADD_TO_COMPARE,
        payload: device
    };
}

export default addToCompare