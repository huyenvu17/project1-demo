import { fork, all } from 'redux-saga/effects';
import patientsSaga from './PatientsSaga';
import usersSaga from './UsersSaga';
import authenSaga from './AuthenSaga';
function* rootSaga(){
    yield all([
        yield fork(patientsSaga),
        yield fork(usersSaga),
        yield fork(authenSaga)
    ])
}

export default rootSaga;