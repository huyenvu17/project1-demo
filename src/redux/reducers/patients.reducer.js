import * as patientsConst from '../constants/patients.const';

const initialState = {
    listData: []
}
const patientsReducer = (state = initialState, action) =>{
    const { type } = action;
    switch(type){
        case patientsConst.FETCH_LIST:{
            return {
                ...state,
                listData: []
            }
        }
        case patientsConst.FETCH_LIST_SUCCESS:{
            return {
                ...state,
                listData: action.payload
            }
        }
        case patientsConst.FETCH_LIST_FAIL:{
            return {
                ...state
            }
        }
        default:
            return state;
    }
}
export default patientsReducer;