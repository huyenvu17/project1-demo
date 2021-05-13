import { combineReducers } from 'redux';
import { authenticationReducer } from './authenReducer';
import { loadingReducer } from './loading.reducer';
import {dashboardReducer } from './dashboard.reducer';
const rootReducer = combineReducers({
    authenticationReducer,
    loadingReducer,
    dashboardReducer
})

export default rootReducer;