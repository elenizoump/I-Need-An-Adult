 import React from "react"
 import App from "./App"
 import ReactDOM from "react-dom";
 import {Provider} from 'react-redux';
 import store from './store';




ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById("app"));