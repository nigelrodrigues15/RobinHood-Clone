import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

//Temporary for testing
import { login, logout, signup } from './util/session_api_util';
//End testing

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();

    ReactDOM.render(<Root store={ store }/>, root);

    //Temporary for testing
    window.login = login;
    window.logout = logout;
    window.signup = signup;

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    //End testing

});