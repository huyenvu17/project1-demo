import * as loadingConst from '../constants/loading.const';

const initialState = {
    isLoading: false
}
const loadingReducer = (state = initialState, action) => {
    const { type } = action
    switch(type){
        case loadingConst.SHOW_LOADING:{
            return {
                ...state,
                isLoading: true
            }
        }
        case loadingConst.HIDE_LOADING:{
            return {
                ...state,
                isLoading: false
            }
        }
        default:
            return state
    }
}

export default loadingReducer;