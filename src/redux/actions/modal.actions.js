import * as modalConst from '../constants/modal.const';

export const showModal = (component, propItems) => ({
    type: modalConst.SHOW_MODAL,
    component,
    propItems
})

export const hideModal = () => ({
    type: modalConst.HIDE_MODAL
})
