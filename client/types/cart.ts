export interface CartState {
    cart: any[];
    error: null | string;
    loading: boolean;
}
export interface Product {
    description: string
    hot: boolean
    img: string
    title: string
    type: string
    brand: string
    size: string | null
    model: string | null
}


export enum CartActionTypes {
    FETCH_CART = "FETCH_CART",
    FETCH_CART_SUCCESS = "FETCH_CART_SUCCESS",
    FETCH_CART_ERROR = "FETCH_CART_ERROR"
}

interface FetchCartAction {
    type: CartActionTypes.FETCH_CART
}

export interface FetchCartSuccessAction {
    type: CartActionTypes.FETCH_CART_SUCCESS,
    payload: any[]
}

interface FetchCartErrorAction {
    type: CartActionTypes.FETCH_CART_ERROR,
    payload: string
}

export type CartAction = FetchCartAction | FetchCartSuccessAction | FetchCartErrorAction