export interface ModalState {
    modal: boolean;
}
export enum ModalActionTypes {
    MODAL_OPEN = "MODAL_OPEN",
    MODAL_CLOSE = "MODAL_CLOSE"
}

interface OpenModalAction {
    type: ModalActionTypes.MODAL_OPEN,
    payload: boolean
}
interface CloseModalAction {
    type: ModalActionTypes.MODAL_CLOSE,
    payload: boolean
}

export type ModalAction = OpenModalAction | CloseModalAction