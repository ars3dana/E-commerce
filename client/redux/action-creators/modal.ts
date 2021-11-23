import { Dispatch } from "react";
import { ModalAction, ModalActionTypes } from "../../types/modal";

export const changeModal = (state) => async (dispatch: Dispatch<ModalAction>) => {

    if (state == true) {
        dispatch({ type: ModalActionTypes.MODAL_OPEN, payload: state })
        return
    }
    if (state == false) {
        dispatch({ type: ModalActionTypes.MODAL_CLOSE, payload: state })
        return
    }
}