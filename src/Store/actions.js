import { DELETE_FROM_CART, ADD_TO_CART, ADD_TO_COMPARISON, INCREASE_TOTALPRICE, DECREASE_TOTALPRICE } from './actionTypes'


export function deleteFromCart(device, amount) {
    return { 
        type: DELETE_FROM_CART,
        payload: device,
        amount
    };
}

export function addToCart(device) {
    return { 
        type: ADD_TO_CART,
        payload: device
    };
}

export function addToComparison(device) {
    return { 
        type: ADD_TO_COMPARISON,
        payload: device
    };
}

export function increaseTotalPrice(device) {
    return { 
        type: INCREASE_TOTALPRICE,
        payload: device
    };
}

export function decreaseTotalPrice(device) {
    return { 
        type: DECREASE_TOTALPRICE,
        payload: device
    };
}

 