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