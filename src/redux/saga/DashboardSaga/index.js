import { fork } from 'redux-saga/effects';
function* watchFetchListDashboard(){

}

function* dashboardSaga() {
    yield fork(watchFetchListDashboard);
}
export default dashboardSaga;