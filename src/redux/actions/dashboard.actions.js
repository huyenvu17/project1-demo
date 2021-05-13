import { FETCH_LIST, FETCH_LIST_SUCCESS, FETCH_LIST_FAIL } from "../constants/dashboard.const";
import { dashboardServices } from "../../services/dashboard.services";
import * as dashboardType from '../types/dashboard.types';
import * as dashboardActions from '../actions/dashboard.actions';
import { domain } from '../../utils/config'

export const fetchList = () => {
    type: FETCH_LIST
}
export const fetchListSuccess = (payload) => {
    type: FETCH_LIST_SUCCESS,
    payload
}
export const fetchListFail = (error) => {
    type: FETCH_LIST_FAIL,
    error
}