import { TotalPriceAction, TotalPriceActionTypes, TotalPriceState } from "../../types/totalPrice"

const initialState: TotalPriceState = {
    totalPrice: 1
}

export const totalPriceReducer = (state = initialState, action: TotalPriceAction): TotalPriceState => {
    switch (action.type) {
        case TotalPriceActionTypes.FETCH_TOTAL:
            return { ...state, totalPrice: action.payload }
        case TotalPriceActionTypes.RAISE_TOTAL:
            return { ...state, totalPrice: state.totalPrice + action.payload }
        case TotalPriceActionTypes.LOWER_TOTAL:
            return { ...state, totalPrice: state.totalPrice - action.payload }
        default:
            return state
    }
}