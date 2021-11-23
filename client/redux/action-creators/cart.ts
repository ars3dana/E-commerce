import axios from "axios"
import { Dispatch } from "react"
import { useTypedSelector } from "../../hooks/typesSelector"
import { CartAction, CartActionTypes } from "../../types/cart"
import { Product } from "../../types/product";

export const fetchCart = (id) => {
    return async (dispatch: Dispatch<CartAction>) => {
        try {
            dispatch({ type: CartActionTypes.FETCH_CART })
            const { data } = await axios.get<Product[]>(`http://localhost:8000/api/v1/cart/${id}`)
            dispatch({ type: CartActionTypes.FETCH_CART_SUCCESS, payload: data })
        } catch (e) {
            dispatch({
                type: CartActionTypes.FETCH_CART_ERROR,
                payload: "Мы потеряли Вашу Корзину("
            })
        }
    }

};

