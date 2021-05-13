import * as dashboardConst from '../constants/dashboard.const';

const initialState = {
    listData: [], 
    loaded: false,
    isLoading: false
}
export const dashboardReducer = (state = initialState, action) =>{
    const { type } = action;
    switch(type){
        case dashboardConst.FETCH_LIST:{
            return {
                ...state,
                isLoading: true
            }
        }
        case dashboardConst.FETCH_LIST_SUCCESS:{
            return {
                ...state,
                listData: action.payload,
                loaded: true,
                isLoading: false
            }
        }
        case dashboardConst.FETCH_LIST_FAIL:{
            return {
                ...state,
                loaded: false,
                isLoading: false
            }
        }
        default:
            return state;
    }
}