import { createStore, applyMiddleware,compose } from "redux";
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import { routerMiddleware } from 'connected-react-router';
import rootSaga from "./rootSaga";
import { createBrowserHistory } from 'history';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware(); 

const initialState = {

}

const store = createStore(
    rootReducer(history),
    initialState,
    composeEnhancers(
        applyMiddleware(routerMiddleware(history), thunk, sagaMiddleware)
    )
); 
sagaMiddleware.run(rootSaga);

export default store;