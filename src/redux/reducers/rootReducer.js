import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authenReducer from './authen.reducer';
import loadingReducer from './loading.reducer';
import patientsReducer from './patients.reducer';
import usersReducer from './users.reducer';
import notificationReducer from './notification.reducer';
import modalReducer from './modal.reducer';
const rootReducer = combineReducers({
    form,
    modalReducer,
    notificationReducer,
    //authenReducer,
    loadingReducer,
    patientsReducer,
    usersReducer
})

export default rootReducer;