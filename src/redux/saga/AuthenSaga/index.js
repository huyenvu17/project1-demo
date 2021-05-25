import { fork, put, call, take, takeEvery, takeLatest, delay } from 'redux-saga/effects';
import axios from "axios";
import { push } from 'connected-react-router';
import {history} from '../../../utils/history';
import * as authenConst from '../../constants/authen.const';
import * as loadingActions from '../../actions/loading.actions';
import * as authenActions from '../../actions/authen.actions';
import { MAIN_DOMAIN } from "../../../utils/config";
import {CODE_SUCCESS, CODE_CREATE} from '../../constants/status.const';
import { addNewUser, signInUser } from '../../../services/users.services';
import * as notificationActions from '../../actions/notification.actions';
import * as notificationConst from '../../constants/notification.const';
import {generateRadomToken} from '../../../helpers/randomTokenGenerator.js';

function* watchSignUpUser({user}){
    try {
        yield put(loadingActions.showLoading());
        yield delay(1500)
        const response = yield call(addNewUser, user);
        if(response && response.status === CODE_CREATE){
            yield put(loadingActions.hideLoading());
            yield put(notificationActions.showNotificationSuccess({
                type: notificationConst.STATUS_SUCCESS,
                message: 'Success',
                description: 'Sign up successfully!'
            }));
            yield put(authenActions.signUpUserSuccess());
            history.push('/signin');
        }
    }catch {
        yield put(loadingActions.hideLoading());
        yield put(authenActions.signUpUserFail());
    }finally {
        yield put(loadingActions.hideLoading());
    }
}
function* watchSignInUser({userSigninInfo}){
    console.log(userSigninInfo)
    let username = userSigninInfo.username;
    let password = userSigninInfo.password;
    try {
        yield put(loadingActions.showLoading());
        yield delay(500)
        const response = yield call(signInUser, username, password);
        if(response && response.status === CODE_SUCCESS && response.data.length > 0){
            const token = generateRadomToken(60);
            let userInfo = {
                username: username,
                token: token
            }
            yield put(notificationActions.showNotificationSuccess({
                type: notificationConst.STATUS_SUCCESS,
                message: 'Success',
                description: 'Welcome to Vetspire!'
            }));
            localStorage.setItem("userInfo", JSON.stringify(userInfo))
            yield put(authenActions.signInUserSuccess(userInfo));
            yield put(loadingActions.hideLoading());
            yield put(push('/'))
        }else{
            yield put(loadingActions.hideLoading());
            yield put(notificationActions.showNotificationError({
                type: notificationConst.STATUS_ERROR,
                message: 'Error',
                description: 'username or password is incorrect!'
            }));
            yield put(authenActions.signInUserFail());
        }
    }catch {
        yield put(loadingActions.hideLoading());
        yield put(authenActions.signInUserFail());
    }finally {
        yield put(loadingActions.hideLoading());
    }
}
function* watchSignOutUser() {
    localStorage.removeItem("userInfo");
    yield put(authenActions.signOutUserComplete());
    window.location.reload();
}
function* authenSaga() {
    yield takeLatest(authenConst.SIGNIN_USER, watchSignInUser);
    yield takeLatest(authenConst.SIGNUP_USER, watchSignUpUser);
    yield takeLatest(authenConst.SIGNOUT_USER, watchSignOutUser);
}
export default authenSaga;
