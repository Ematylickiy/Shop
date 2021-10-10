import { ADD_TO_COMPARE } from "./actionTypes";

const initialState = {
    devices: [],
    totalPrice: 0
  };


function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TO_COMPARE:
            return {
                ...state,
                devices: [...state.devices, action.payload]
            };
        default: return state;
    }
}

export default reducer