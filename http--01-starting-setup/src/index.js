import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// for Send aka requests
axios.interceptors.request.use(request => {
    console.log(request);
    // Edit request config could be placed here
    return request;
/*this error is related to sending the request like if you had no internet connectivity*/
}, error => {
    console.log(error);
    // The line below is so it is still forwarded to the request as written in the component
    // ie it will still show the error in the UI but here you could also perhaps send it
    // to the server as log file or something like that
    return Promise.reject(error);
});

// for Get/Fetch aka responses
axios.interceptors.response.use(response => {
    console.log(response);
    // Edit request config could be placed here
    return response;

}, error => {
    console.log("From index.js response interceptor", error);
    return Promise.reject(error);
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
