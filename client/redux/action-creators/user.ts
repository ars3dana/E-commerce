import axios from 'axios';
import { Dispatch } from 'react';
import { User, UserAction, UserActionTypes } from '../../types/user';
import jwt from 'jwt-decode'


export const fetchUser = (out, userData, path) => async (dispatch: Dispatch<UserAction>) => {
    try {
        dispatch({ type: UserActionTypes.FETCH_USER })
        if (out) {
            localStorage.clear()
            dispatch({ type: UserActionTypes.LOGOUT_USER })
        }

        if (userData) {
            const { data } = await axios.post(`http://localhost:8000/api/v1/${path}`, userData)
            console.log(data)
            const decoded = jwt(data.token)
            dispatch({ type: UserActionTypes.FETCH_USER_SUCCESS, payload: decoded })
            localStorage.setItem("token", data.token)
        }

        const token = localStorage.getItem("token")
        const decoded = jwt(token)
        console.log(decoded)
        dispatch({ type: UserActionTypes.FETCH_USER_SUCCESS, payload: decoded })

    } catch (e) {
        // dispatch({ type: UserActionTypes.FETCH_USER_ERROR, payload: e.response.data.errors }) //array
    }
}

export const fetchAllUser = () => async (dispatch: Dispatch<UserAction>) => {
    try {
        dispatch({ type: UserActionTypes.FETCH_USER })
        const { data } = await axios.get<User[]>(`http://localhost:8000/api/v1/user`)
        dispatch({ type: UserActionTypes.FETCH_USER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: UserActionTypes.FETCH_USER_ERROR, payload: error })
    }
}