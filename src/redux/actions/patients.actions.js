import * as patientConst from '../constants/patients.const';
import { patientsServices } from "../../services/patients.services";
import { domain } from '../../utils/config'

export const fetchList = () => ({
    type: patientConst.FETCH_LIST
})
export const fetchListSuccess = (payload) => ({
    type: patientConst.FETCH_LIST_SUCCESS,
    payload
})
export const fetchListFail = (error) => ({
    type: patientConst.FETCH_LIST_FAIL,
    error
})

export const addNewPatient = (formData) => ({ 
    type: patientConst.ADD_PATIENT,
    formData
})

export const addNewPatientSuccess = () => ({ 
    type: patientConst.ADD_PATIENT_SUCCESS
})

export const addNewPatientFail = (error) => ({
    type: patientConst.ADD_PATIENT_FAIL,
    error
})

export const updatePatient = (formData, patientId) => ({ 
    type: patientConst.UPDATE_PATIENT_DETAIL,
    formData,
    patientId
})

export const updatePatientSuccess = () => ({ 
    type: patientConst.UPDATE_PATIENT_DETAIL_SUCCESS
})

export const updatePatientFail = (error) => ({
    type: patientConst.UPDATE_PATIENT_DETAIL_FAIL,
    error
})

export const deletePatient = (patientId) => ({ 
    type: patientConst.DELETE_PATIENT,
    patientId
})

export const deletePatientSuccess = () => ({ 
    type: patientConst.DELETE_PATIENT_SUCCESS
})

export const deletePatientFail = (error) => ({
    type: patientConst.DELETE_PATIENT_FAIL,
    error
})

