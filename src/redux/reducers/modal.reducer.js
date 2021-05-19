import * as modalConst from '../constants/modal.const';

const initialState = {
    isVisible: false,
    options: {
        component: null
    }
}
const modalReducer = (state = initialState, action) => {
    const { type } = action
    switch(type){
        case modalConst.SHOW_MODAL:{
            return {
                ...state,
                isVisible: true,
                options: {
                    component: action.component
                }
            }
        }
        case modalConst.HIDE_MODAL:{
            return {
                ...state,
                isVisible: false
            }
        }
        default:
            return state
    }
}

export default modalReducer;