import { fork, put, call, take, takeEvery, takeLatest, delay } from 'redux-saga/effects';
import axios from "axios";
import { push } from 'connected-react-router';
import {history} from '../../../utils/history';
import * as usersConst from '../../constants/users.const';
import * as usersActions from '../../actions/users.actions';
import * as loadingActions from '../../actions/loading.actions';
import * as authenActions from '../../actions/authen.actions';
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
        if (res && res.status == 200) {
            const {data} = res;
            yield put(usersActions.fetchUserListSuccess(data));
            yield put(loadingActions.hideLoading());
        }
    } catch{
        yield put(usersActions.fetchUserListFail(data))
        yield put(loadingActions.hideLoading());
    } finally {
        yield put(loadingActions.hideLoading());
    }
}

function* usersSaga() {
    yield takeLatest(usersConst.FETCH_USERS, watchFetchListUser);
}
export default usersSaga;
