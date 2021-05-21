import { fork, put, call, take, takeEvery, takeLatest, delay } from 'redux-saga/effects';
import axios from "axios";
import * as usersConst from '../../constants/users.const';
import * as usersActions from '../../actions/users.actions';
import * as loadingActions from '../../actions/loading.actions';
import { MAIN_DOMAIN } from "../../../utils/config";
import {CODE_SUCCESS, CODE_CREATE} from '../../constants/status.const';
import { addNewUser } from '../../../services/users.services';
import * as notificationActions from '../../actions/notification.actions';
import * as notificationConst from '../../constants/notification.const';
function* watchFetchListUser() {
    try {
        yield put(loadingActions.showLoading());
        yield delay(500)
        const res = yield call(axios.get, `${MAIN_DOMAIN}/users`);
        console.log("fetch user success")
        console.log(res)
        if (res && res.status == 200) {
            const {data} = res;
            yield put(usersActions.fetchUserListSuccess(data));
            yield put(loadingActions.hideLoading());
        }
    } catch{
        console.log("api call failed");
        yield put(usersActions.fetchUserListFail(data))
        yield put(loadingActions.hideLoading());
    } finally {
        yield put(loadingActions.hideLoading());
    }
}

function* watchSignUpUser({payload}){
    console.log('payload saga', payload)
    //addNewUser
    try {
        yield put(loadingActions.showLoading());
        yield delay(1500)
        console.log('api here')
        const response = yield call(addNewUser, payload);
        //const response = yield call(axios.post, `${MAIN_DOMAIN}/pets`, formData);
        console.log('response', response)
        if(response && response.status === CODE_CREATE){
            yield put(loadingActions.hideLoading());
            yield put(notificationActions.showNotificationSuccess({
                type: notificationConst.STATUS_SUCCESS,
                message: 'Success',
                description: 'Sign up successfully!'
            }));
            yield put(usersActions.signUpUserSuccess());
        }
    }catch {
        yield put(loadingActions.hideLoading());
        yield put(usersActions.signUpUserFail());
    }finally {
        yield put(loadingActions.hideLoading());
    }
}

function* usersSaga() {
    yield takeLatest(usersConst.FETCH_USERS, watchFetchListUser);
    yield takeLatest(usersConst.SIGNUP_USER, watchSignUpUser);
}
export default usersSaga;
