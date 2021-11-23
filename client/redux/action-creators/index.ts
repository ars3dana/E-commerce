import * as ProductActionCreators from './product'
import * as UserActionCreators from './user'
import * as  CartActionCreators from './cart'
import * as TotalActionCreators from './totalPrice'
import * as ModalActionCreators from './modal'

export default {
    ...ProductActionCreators,
    ...UserActionCreators,
    ...CartActionCreators,
    ...TotalActionCreators,
    ...ModalActionCreators,
}