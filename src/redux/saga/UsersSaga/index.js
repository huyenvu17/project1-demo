import { fork, put, call, take, takeEvery, takeLatest, delay } from 'redux-saga/effects';
import axios from "axios";
import * as usersConst from '../../constants/users.const';
import * as usersActions from '../../actions/users.actions';
import * as loadingActions from '../../actions/loading.actions';
import { MAIN_DOMAIN } from "../../../utils/config";

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

function* usersSaga() {
    yield takeLatest(usersConst.FETCH_USERS, watchFetchListUser);
}
export default usersSaga;