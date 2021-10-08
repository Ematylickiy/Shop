import { ADD_OR_REMOVE_TO_BASKET } from './actionTypes'


function addOrRemoveDeviceToBasket(device) {
    return { 
        type: ADD_OR_REMOVE_TO_BASKET,
        payload: device
    };
}

export default addOrRemoveDeviceToBasket