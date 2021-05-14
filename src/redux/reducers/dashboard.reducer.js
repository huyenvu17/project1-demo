import * as dashboardConst from '../constants/dashboard.const';

const initialState = {
    listData: [], 
    isLoading: false
}
const dashboardReducer = (state = initialState, action) =>{
    const { type } = action;
    switch(type){
        case dashboardConst.FETCH_LIST:{
            return {
                ...state,
                listData: [],
                isLoading: true
            }
        }
        case dashboardConst.FETCH_LIST_SUCCESS:{
            return {
                ...state,
                listData: action.payload,
                isLoading: false
            }
        }
        case dashboardConst.FETCH_LIST_FAIL:{
            return {
                ...state,
                isLoading: false
            }
        }
        default:
            return state;
    }
}
export default dashboardReducer;