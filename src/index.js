import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB-N6wtJXOU8X2uDxLM27qULB8P5lTtSrI",
    authDomain: "web-messanger.firebaseapp.com",
    databaseURL: "https://web-messanger.firebaseio.com",
    projectId: "web-messanger",
    storageBucket: "web-messanger.appspot.com",
    messagingSenderId: "171677578562",
    appId: "1:171677578562:web:034cbd25c63379b9f044db",
    measurementId: "G-GC65KZ0D73"
};


firebase.initializeApp(firebaseConfig);

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
