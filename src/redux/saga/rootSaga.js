import { fork, all } from 'redux-saga/effects';
import dashboardSaga from './DashboardSaga';
import usersSaga from './UsersSaga';
function* rootSaga(){
    yield all([
        yield fork(dashboardSaga),
        yield fork(usersSaga)
    ])
}

export default rootSaga;