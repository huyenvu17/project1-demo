import { fork, all } from 'redux-saga/effects';
import patientsSaga from './PatientsSaga';
import usersSaga from './UsersSaga';
function* rootSaga(){
    yield all([
        yield fork(patientsSaga),
        yield fork(usersSaga)
    ])
}

export default rootSaga;