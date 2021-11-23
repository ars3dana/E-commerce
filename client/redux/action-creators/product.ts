import axios from "axios";
import { Dispatch } from "react";
import { Product, ProductAction, ProductActionTypes } from "../../types/product";

export const fetchProduct = (page = 1, limit = 10, q) => async (dispatch: Dispatch<ProductAction>) => {
    try {
        dispatch({ type: ProductActionTypes.FETCH_PRODUCTS })
        if (q) {
            const { data } = await axios.get(`http://localhost:8000/api/v1/product?q=${q}`);
            dispatch({ type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS, payload: data.rows })
            return
        }
        const { data } = await axios.get<Product[]>(`http://localhost:8000/api/v1/product`);
        const product = data.rows
        dispatch({ type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS, payload: product })

    } catch (e) {
        dispatch({
            type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
            payload: "Ошибка при загрузке Товара"
        })
    }
}