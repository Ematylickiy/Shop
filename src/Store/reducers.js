import { ADD_TO_CART, DELETE_FROM_CART, ADD_TO_COMPARISON, INCREASE_TOTALPRICE, DECREASE_TOTALPRICE, DELETE_FROM_COMPARISON, DELETE_ALL_FROM_COMPARISON } from "./actionTypes";

const initialState = {
    cart: [],
    comparison: [],
    totalPrice: 0,
  };


function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload],
                totalPrice: state.totalPrice + Number(action.payload.price)
            };
        case ADD_TO_COMPARISON:
            return {
                ...state,
                comparison: [...state.comparison, action.payload],
            };
        case DELETE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.name !== action.payload.name),
                totalPrice: state.totalPrice - action.amount
            };
        case DELETE_FROM_COMPARISON:
            return {
                ...state,
                comparison: state.comparison.filter(item => item.name !== action.payload.name),
            };
        case DELETE_ALL_FROM_COMPARISON:
            return {
                ...state,
                comparison: [],
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