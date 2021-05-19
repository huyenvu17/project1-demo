import * as patientsConst from '../constants/patients.const';

const initialState = {
    listData: [],
    formData: null,
    error: null
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
        case patientsConst.ADD_PATIENT: {
            return {
                ...state,
                formData: action.data
            }
        }
        case patientsConst.ADD_PATIENT_SUCCESS:
        case patientsConst.DELETE_PATIENT_SUCCESS:
        case patientsConst.UPDATE_PATIENT_DETAIL_SUCCESS: {
            return {
                ...state,
                formData: null
            }
        }
        case patientsConst.ADD_PATIENT_FAIL:
        case patientsConst.UPDATE_PATIENT_DETAIL_FAIL:
        case patientsConst.DELETE_PATIENT_FAIL: {
            return {
                ...state,
                inputData: null,
                error: action.error
            }
        }
        case patientsConst.DELETE_PATIENT: {
            return {
                ...state,
                patientId: action.patientId
            }
        }
        case patientsConst.UPDATE_PATIENT_DETAIL: {
            return {
                ...state,
                patientId: action.patientId,
                formData: action.formData
                
            }
        }
        default:
            return state;
    }
}
export default patientsReducer;