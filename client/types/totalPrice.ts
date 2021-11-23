export interface TotalPriceState {
    totalPrice: number
}

export enum TotalPriceActionTypes {
    FETCH_TOTAL = "FETCH_TOTAL",
    RAISE_TOTAL = "RAISE_TOTAL",
    LOWER_TOTAL = "LOWER_PRICE"
}

interface FetchTotalPriceAction {
    type: TotalPriceActionTypes.FETCH_TOTAL,
    payload: number
}
interface RaiseTotalPriceAction {
    type: TotalPriceActionTypes.RAISE_TOTAL,
    payload: number
}
interface LowerTotalPriceAction {
    type: TotalPriceActionTypes.LOWER_TOTAL,
    payload: number
}

export type TotalPriceAction = FetchTotalPriceAction | RaiseTotalPriceAction | LowerTotalPriceAction