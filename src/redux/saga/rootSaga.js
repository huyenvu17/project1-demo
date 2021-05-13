import { fork, all } from 'redux-saga/effects';
import dashboardSaga from './DashboardSaga'
function* rootSaga(){
    yield all([
        yield fork(dashboardSaga)
    ])
}

export default rootSaga;