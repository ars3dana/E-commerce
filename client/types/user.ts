export interface UserState {
    user: User;
    error: null | string;
    loading: boolean;
}
export interface User {
    id: string;
    email: string;
    password: string;
}
export enum UserActionTypes {
    FETCH_USER = "FETCH_USER",
    FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
    FETCH_USER_ERROR = "FETCH_USER_ERROR",
    LOGOUT_USER = "LOGOUT_USER"
}

interface FetchUserAction {
    type: UserActionTypes.FETCH_USER
}

export interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_USER_SUCCESS,
    payload: any[]
}

interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_USER_ERROR,
    payload: string
}
interface LogoutUserAction {
    type: UserActionTypes.LOGOUT_USER,
}

export type UserAction = LogoutUserAction | FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction