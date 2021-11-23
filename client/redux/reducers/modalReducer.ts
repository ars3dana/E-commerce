import { ModalState, ModalAction, ModalActionTypes } from "../../types/modal";

const initialState: ModalState = {
    modal: false
}

export const modalReducer = (state = initialState, action: ModalAction) => {
    switch (action.type) {
        case ModalActionTypes.MODAL_OPEN:
            return { modal: action.payload }
        case ModalActionTypes.MODAL_CLOSE:
            return { modal: action.payload }
        default:
            return state
    }
}