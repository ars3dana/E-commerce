import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { productReducer } from "./productReducer";
import { userReducer } from "./userReducer";
import { totalPriceReducer } from './totalPriceReducer'
import { modalReducer } from "./modalReducer";


const rootReducer = combineReducers({
    product: productReducer,
    user: userReducer,
    cart: cartReducer,
    total: totalPriceReducer,
    modal: modalReducer
})

export const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        }
        if (state.count) nextState.count = state.count // preserve count value on client side navigation
        return nextState
    } else {
        return rootReducer(state, action)
    }
}

export type RootState = ReturnType<typeof rootReducer>

