export interface AdminState {
    admin: string;
}

export enum AdminActionTypes {
    USER = 'USER',
    PRODUCT = "PRODUCT"
}

export interface UserAction {
    type: AdminActionTypes.USER,
    payload: string
}
export interface ProductAction {
    type: AdminActionTypes.PRODUCT,
    payload: string
}

export type AdminAction = UserAction | ProductAction