import { fork, put, call, take, takeEvery, takeLatest, delay } from 'redux-saga/effects';
import axios from "axios";
import { push } from 'connected-react-router';
import {history} from '../../../utils/history';
import * as usersConst from '../../constants/users.const';
import * as usersActions from '../../actions/users.actions';
import * as loadingActions from '../../actions/loading.actions';
import { MAIN_DOMAIN } from "../../../utils/config";
import {CODE_SUCCESS, CODE_CREATE} from '../../constants/status.const';
import { addNewUser, signInUser } from '../../../services/users.services';
import * as notificationActions from '../../actions/notification.actions';
import * as notificationConst from '../../constants/notification.const';
import {generateRadomToken} from '../../../helpers/randomTokenGenerator.js';
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
            yield put(usersActions.signUpUserSuccess());
            history.push('/signin');
        }
    }catch {
        yield put(loadingActions.hideLoading());
        yield put(usersActions.signUpUserFail());
    }finally {
        yield put(loadingActions.hideLoading());
    }
}
function* watchSignInUser({user}){
    console.log('user', user)
    let username = user.username;
    let password = user.password;
    try {
        yield put(loadingActions.showLoading());
        yield delay(1500)
        const response = yield call(signInUser, username, password);
        console.log(response)
        if(response && response.status === CODE_SUCCESS && response.data.length > 0){
            const token = generateRadomToken(60);
            console.log('token', token)
            let userInfo = {
                username: username,
                token: token
            }
            yield put(loadingActions.hideLoading());
            yield put(notificationActions.showNotificationSuccess({
                type: notificationConst.STATUS_SUCCESS,
                message: 'Success',
                description: 'Sign in successfully!'
            }));
            yield put(usersActions.signInUserSuccess(user));
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
            history.push('/');
        }else{
            yield put(loadingActions.hideLoading());
            yield put(notificationActions.showNotificationError({
                type: notificationConst.STATUS_ERROR,
                message: 'Error',
                description: 'username or password is incorrect!'
            }));
            yield put(usersActions.signInUserFail());
        }
    }catch {
        yield put(loadingActions.hideLoading());
        yield put(usersActions.signInUserFail());
    }finally {
        yield put(loadingActions.hideLoading());
    }
}
function* usersSaga() {
    yield takeLatest(usersConst.FETCH_USERS, watchFetchListUser);
    yield takeLatest(usersConst.SIGNUP_USER, watchSignUpUser);
    yield takeLatest(usersConst.SIGNIN_USER, watchSignInUser);
}
export default usersSaga;
