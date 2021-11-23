export interface ProductState {
    products: any[];
    page: number;
    limit: number;
    loading: boolean;
    error: number | string;
}

export enum ProductActionTypes {
    FETCH_PRODUCTS = "FETCH_PRODUCTS",
    FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
    FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR",
    SET_PRODUCT_PAGE = "SET_PRODUCT_PAGE"
}
export interface Product {
    description: string
    hot: boolean
    img: string
    title: string
    type: string
    brand: string
    price: number
    cart: object
    size: string | null
    model: string | null
}
interface FetchProductAction {
    type: ProductActionTypes.FETCH_PRODUCTS;
}

interface FetchProductSuccessAction {
    type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS;
    payload: any[]
}

interface FetchProductErrorAction {
    type: ProductActionTypes.FETCH_PRODUCTS_ERROR;
    payload: string;
}

interface SetProductPage {
    type: ProductActionTypes.SET_PRODUCT_PAGE;
    payload: number;
}

export type ProductAction = FetchProductAction | FetchProductSuccessAction | FetchProductErrorAction | SetProductPage