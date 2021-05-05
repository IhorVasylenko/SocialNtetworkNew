import React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import myState from "./component/redux/state";



ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App state={myState}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
