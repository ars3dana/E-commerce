import { CartAction, CartActionTypes, CartState } from "../../types/cart"


const initialState: CartState = {
    cart: [],
    error: null,
    loading: false
}

export const cartReducer = (state = initialState, action: CartAction): CartState => {
    switch (action.type) {
        case CartActionTypes.FETCH_CART:
            return { ...state, loading: true }
        case CartActionTypes.FETCH_CART_SUCCESS:
            return { ...state, loading: false, cart: action.payload }
        case CartActionTypes.FETCH_CART_ERROR:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}