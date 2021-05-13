import { createStore, applyMiddleware,compose } from "redux";
import createSagaMiddleware from 'redux-saga';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import rootSaga from "./rootSaga";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware(); 

const initialState = {

}

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
        applyMiddleware(thunkMiddleware, sagaMiddleware)
    )); 
sagaMiddleware.run(rootSaga);

export default store;