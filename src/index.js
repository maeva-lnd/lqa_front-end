import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import UserReducer from "./Reducers/UserReducer";
import SessionStorage from "./Store/LoadSessionStorage";

const Store = createStore(UserReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={Store}>
        <SessionStorage />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

