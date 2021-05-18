import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import './assets/styles/main';
import store from './redux/saga/store';
import App from './App';
import Loading from './components/Loading';
import Notification from './components/Notification';
import ModalComponent from './components/Modal';
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
            <Loading />
            <Notification/>
            <ModalComponent/>
        </BrowserRouter>
    </Provider>, 
document.getElementById("root"));