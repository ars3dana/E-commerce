import { ProductActionTypes, ProductState, ProductAction } from "../../types/product"


const inititalState: ProductState = {
    products: [],
    page: 1,
    limit: 10,
    error: null,
    loading: false
}

export const productReducer = (state = inititalState, action: ProductAction): ProductState => {
    switch (action.type) {
        case ProductActionTypes.FETCH_PRODUCTS:
            return { ...state, loading: true }
        case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
            return { ...state, loading: false, products: action.payload }
        case ProductActionTypes.FETCH_PRODUCTS_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ProductActionTypes.SET_PRODUCT_PAGE:
            return { ...state, page: action.payload }
        default:
            return state
    }
}