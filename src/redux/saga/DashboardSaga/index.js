import { fork, put, call, take, takeEvery, takeLatest, delay } from 'redux-saga/effects';
import axios from "axios";
import * as dashboardConst from '../../constants/dashboard.const';
import * as DashboardServices from '../../../services/dashboard.services';
import * as dashboardActions from '../../actions/dashboard.actions';
import * as loadingActions from '../../actions/loading.actions';
import { MAIN_DOMAIN } from "../../../utils/config";


function* watchFetchListDashboard() {
    // yield delay(1000)
    //const res = yield call(fetch, DashboardServices.getDashboardList());
    //console.log('res',res)
    try {
        // const res = yield call(DashboardServices.getDashboardList());
        // //const { res } = yield call(['https://5f7eca79094b670016b767c9.mockapi.io/pets'])

        // axios.get(`https://5f7eca79094b670016b767c9.mockapi.io/pets`)
        //     .then((response) => {
        //         console.log(response)
        //     })
        
        yield put(loadingActions.showLoading());
        yield delay(500)
        const res = yield call(axios.get, `${MAIN_DOMAIN}/pets`);
        //const res = yield call(DashboardServices.getPetsList());
        console.log(res)
        if (res && res.status == 200) {
            const {data} = res;
            console.log("fetchListSuccess")
            yield put(dashboardActions.fetchListSuccess(data));
            yield put(loadingActions.hideLoading());
        }
    } catch{
        console.log("api call failed");
        if(data){
          yield put(dashboardActions.fetchListFail(data))
        }
        yield put(loadingActions.hideLoading());
    } finally {
        yield put(loadingActions.hideLoading());
    }
}

function* dashboardSaga() {
    yield takeLatest(dashboardConst.FETCH_LIST, watchFetchListDashboard);
}
export default dashboardSaga;
