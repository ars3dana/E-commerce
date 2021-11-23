import { Dispatch } from "react"
import { TotalPriceAction, TotalPriceActionTypes } from "../../types/totalPrice"
export const fetchTotal = (price) => (dispatch: Dispatch<TotalPriceAction>) => {
    dispatch({ type: TotalPriceActionTypes.FETCH_TOTAL, payload: price })
}
export const upTotal = (price) => (dispatch: Dispatch<TotalPriceAction>) => {
    dispatch({ type: TotalPriceActionTypes.RAISE_TOTAL, payload: price })
}
export const downTotal = (price) => (dispatch: Dispatch<TotalPriceAction>) => {
    dispatch({ type: TotalPriceActionTypes.LOWER_TOTAL, payload: price })
}