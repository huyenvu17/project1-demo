import { fork, put, call, take, takeEvery, takeLatest, delay, select } from 'redux-saga/effects';
import axios from "axios";
import * as patientsConst from '../../constants/patients.const';
import {getPatientsList} from '../../../services/patients.services';
import * as patientsActions from '../../actions/patients.actions';
import * as loadingActions from '../../actions/loading.actions';
import { MAIN_DOMAIN } from "../../../utils/config";
import {CODE_SUCCESS} from '../../constants/status.const';

function* watchFetchListPatients() {
    try {
        yield put(loadingActions.showLoading());
        yield delay(500)
        //const response = yield call(axios.get, `${MAIN_DOMAIN}/pets`);
        const response = yield call(getPatientsList);
        console.log('response', response)
        if (response && response.status === CODE_SUCCESS) {
            const {data} = response;
            console.log("fetchListSuccess")
            yield put(patientsActions.fetchListSuccess(data));
            yield put(loadingActions.hideLoading());
        }
    } catch{
        console.log("api call failed");
        if(data){
          yield put(patientsActions.fetchListFail(data))
        }
        yield put(loadingActions.hideLoading());
    } finally {
        yield put(loadingActions.hideLoading());
    }
}
function* watchFetchPatientDetail() {
    console.log('watchFetchPatientDetail')
}
function* patientsSaga() {
    yield takeLatest(patientsConst.FETCH_LIST, watchFetchListPatients);
    yield takeLatest(patientsConst.FETCH_PATIENT_DETAIL, watchFetchPatientDetail);
}
export default patientsSaga;
