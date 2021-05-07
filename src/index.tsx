import React from 'react';
import * as ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import {store} from "./component/redux/state";

export const renderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderTree()
store.subscribe(renderTree)

reportWebVitals();
