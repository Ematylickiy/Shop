import { ADD_OR_REMOVE_TO_BASKET } from "./actionTypes";

const initialState = {
    devices: [],
    totalPrice: 0
  };


function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_OR_REMOVE_TO_BASKET:
            let targetDevice = state.devices.find(device => action.payload.name === device.name);
            if (targetDevice) {
                let devicesWithoutTarget = state.devices.filter(device => action.payload.name !== device.name)
                return {
                    ...state,
                    devices: [...devicesWithoutTarget],
                    totalPrice: state.totalPrice - Number(targetDevice.price)
                }
            }
            return {
                ...state,
                devices: [...state.devices, action.payload],
                totalPrice: state.totalPrice + Number(action.payload.price)
            };
        default: return state;
    }
}

export default reducer