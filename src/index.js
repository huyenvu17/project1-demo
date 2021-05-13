import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import Loading from './components/Loading';
import 'antd/dist/antd.css';
import './assets/styles/main';
import store from './redux/saga/store';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
            <Loading />
        </BrowserRouter>
    </Provider>, 
document.getElementById("root"));