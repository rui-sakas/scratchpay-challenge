import React from 'react';
import ReactDOM from 'react-dom/client';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { makeServer } from './server/server';
import Routes from './config/routes';
import './assets/fonts/hero-new/Hero-New-Regular.otf';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/sass/main.scss';
import rootSaga from './sagas';
import reducer from './reducer';

//MirageJS config
makeServer({ environment: 'development' });

//Redux-Saga config
const sagaMiddleware = createSagaMiddleware();
let store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Routes />
    </Provider>
);
