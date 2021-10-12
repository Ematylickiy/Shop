import { ADD_TO_CART, DELETE_FROM_CART, ADD_TO_COMPARISON, INCREASE_TOTALPRICE, DECREASE_TOTALPRICE } from "./actionTypes";

const initialState = {
    cart: [],
    totalPrice: 0
  };


function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload],
                totalPrice: state.totalPrice + Number(action.payload.price)
            };
        case DELETE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.name !== action.payload.name),
                totalPrice: state.totalPrice - action.amount
            };
        case INCREASE_TOTALPRICE:
            let updateProductIncr = state.cart.find(item => item.name === action.payload.name)
            updateProductIncr.count = +updateProductIncr.count + 1
            return {
                ...state,
                totalPrice: state.totalPrice + Number(action.payload.price)
            };
        case DECREASE_TOTALPRICE:
            let updateProductDecr = state.cart.find(item => item.name === action.payload.name)
            --updateProductDecr.count
            return {
                ...state,
                totalPrice: state.totalPrice - action.payload.price
            };
        
        default: return state;
    }
}

export default reducer