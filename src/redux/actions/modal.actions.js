import * as modalConst from '../constants/modal.const';

export const showModal = (component) => ({
    type: modalConst.SHOW_MODAL,
    component
})

export const hideModal = () => ({
    type: modalConst.HIDE_MODAL
})
