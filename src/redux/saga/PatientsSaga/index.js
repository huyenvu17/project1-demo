import { fork, put, call, take, takeEvery, takeLatest, delay, select } from 'redux-saga/effects';
import axios from "axios";
import * as patientsConst from '../../constants/patients.const';
import {getPatientsList, addNewPatient, deletePatient, getPatientDetail, updatePatient} from '../../../services/patients.services';
import * as patientsActions from '../../actions/patients.actions';
import * as loadingActions from '../../actions/loading.actions';
import * as notificationActions from '../../actions/notification.actions';
import * as notificationConst from '../../constants/notification.const';
import * as modalActions from '../../actions/modal.actions';
import { MAIN_DOMAIN } from "../../../utils/config";
import {CODE_SUCCESS, CODE_CREATE} from '../../constants/status.const';
import AddUpdatePatientContainer from '../../../containers/Patients/AddUpdatePatient';
function* watchFetchListPatients() {
    try {
        yield put(loadingActions.showLoading());
        yield delay(500)
        //const response = yield call(axios.get, `${MAIN_DOMAIN}/pets`);
        const response = yield call(getPatientsList);
        console.log('response', response)
        if (response && response.status === CODE_SUCCESS && response.data) {
            const {data} = response;
            console.log("fetchListSuccess")
            yield put(patientsActions.fetchListSuccess(data));
            yield put(loadingActions.hideLoading());
        }
    } catch{
        console.log("api call failed");
        yield put(patientsActions.fetchListFail(data))
        yield put(loadingActions.hideLoading());
    } finally {
        yield put(loadingActions.hideLoading());
    }
}

function* watchFechPatientDetail(payload){
    const {patientId} = payload;
    try {
        yield put(loadingActions.showLoading());
        yield delay(500);
        yield put(modalActions.showModal(AddUpdatePatientContainer))
        const response = yield call(getPatientDetail, patientId);
        console.log('response', response)
        if (response && response.status === CODE_SUCCESS && response.data) {
            const {data} = response;
            console.log("fetch patient detail success", data)
            yield put(patientsActions.fetchPatientDetailSuccess(data));
            yield put(loadingActions.hideLoading());
        }
    } catch{
        console.log("api call failed");
        yield put(patientsActions.fetchPatientDetailFail(data))
        yield put(loadingActions.hideLoading());
    } finally {
        yield put(loadingActions.hideLoading());
    }
}
function* watchAddNewPatient({formData}) {
    console.log('watchAddNewPatient')
    console.log('formData', formData)
    try {
        yield put(loadingActions.showLoading());
        yield delay(1500)
        console.log('api here')
        const response = yield call(addNewPatient, formData);
        //const response = yield call(axios.post, `${MAIN_DOMAIN}/pets`, formData);
        console.log('response', response)
        if(response && response.status === CODE_CREATE){
            yield put(loadingActions.hideLoading());
            yield put(notificationActions.showNotificationSuccess({
                type: notificationConst.STATUS_SUCCESS,
                message: 'Success',
                description: 'New patient added successfully!'
            }));
            yield put(patientsActions.addNewPatientSuccess());
            yield put(modalActions.hideModal());
            yield call(getPatientsList);
            window.location.reload();
        }
    }catch {
        yield put(loadingActions.hideLoading());
        yield put(patientsActions.addNewPatientFail());
    }finally {
        yield put(loadingActions.hideLoading());
    }
}

function* watchUpdatePatient({formData}) {
    console.log('watchAddNewPatient')
    console.log('formData', formData)
    const {id, name, dob, breed, coatColor, sex,species, weight} = formData
    let updateValues = {
        id,
        name,
        dob,
        breed,
        coatColor,
        sex,
        species,
        species,
        weight
    }
    console.log(id)
    try {
        yield put(loadingActions.showLoading());
        yield delay(1500)
        console.log('api here')
        const response = yield call(updatePatient, updateValues, id);
        //const response = yield call(axios.post, `${MAIN_DOMAIN}/pets`, formData);
        console.log('response', response)
        if(response && response.status === CODE_SUCCESS){
            console.log('hideLoading')
            yield put(loadingActions.hideLoading());
            console.log('show noti')
            yield put(notificationActions.showNotificationSuccess({
                type: notificationConst.STATUS_SUCCESS,
                message: 'Success',
                description: 'Patient updated successfully!'
            }));
            console.log('update patient')
            yield put(patientsActions.updatePatientSuccess());
            yield call(getPatientsList);
        }
    }catch {
        yield put(loadingActions.hideLoading());
        yield put(patientsActions.updatePatientFail());
    }finally {
        yield put(loadingActions.hideLoading());
    }
}

function* watchDeletePatient(payload) {
    console.log("get patientId from saga", payload.patientId)
    const { patientId } = payload
    if(patientId != null){
        try {
            yield put(loadingActions.showLoading());
            yield delay(500)
            console.log('api here')
            const response = yield call(deletePatient, payload.patientId);
            //const response = yield call(axios.delete, `${MAIN_DOMAIN}/pets`, parseIn(patientId));
            console.log('response', response)
            if(response && response.status === CODE_SUCCESS){
                yield put(loadingActions.hideLoading());
                yield put(notificationActions.showNotificationSuccess({
                    type: notificationConst.STATUS_SUCCESS,
                    message: 'Success',
                    description: 'Patient deleted successfully!'
                }));
                yield put(patientsActions.deletePatientSuccess());
                yield put(modalActions.hideModal());
                yield call(getPatientsList);
                window.location.reload();
            }
        }catch {
            yield put(loadingActions.hideLoading());
            yield put(patientsActions.deletePatientFail());
        }finally {
            yield put(loadingActions.hideLoading());
        }
    }
}

function* patientsSaga() {
    yield takeLatest(patientsConst.FETCH_LIST, watchFetchListPatients);
    yield takeEvery(patientsConst.FETCH_PATIENT_DETAIL, watchFechPatientDetail)
    yield takeEvery(patientsConst.ADD_PATIENT, watchAddNewPatient);
    yield takeLatest(patientsConst.UPDATE_PATIENT_DETAIL, watchUpdatePatient);
    yield takeLatest(patientsConst.DELETE_PATIENT, watchDeletePatient);
}

export default patientsSaga;
