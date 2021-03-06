import { UserAction, UserActionTypes, UserState } from "../../types/user"

const initialState: UserState = {
    user: null,
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action: UserAction) => {
    switch (action.type) {
        case UserActionTypes.FETCH_USER:
            return { ...state, loading: true }
        case UserActionTypes.FETCH_USER_SUCCESS:
            return { ...state, loading: false, user: action.payload }
        case UserActionTypes.FETCH_USER_ERROR:
            return { ...state, loading: false, error: action.payload }
        case UserActionTypes.LOGOUT_USER:
            return { ...state, user: null }
        default:
            return state
    }
}
