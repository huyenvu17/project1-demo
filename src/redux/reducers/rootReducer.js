import { combineReducers } from 'redux';
import authenReducer from './authen.reducer';
import loadingReducer from './loading.reducer';
import dashboardReducer from './dashboard.reducer';
import usersReducer from './users.reducer';
const rootReducer = combineReducers({
    authenReducer,
    loadingReducer,
    dashboardReducer,
    usersReducer
})

export default rootReducer;