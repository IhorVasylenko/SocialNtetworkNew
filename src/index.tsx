import * as React from 'react';
import * as ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import {store} from "./component/redux/store";
import {Provider} from "react-redux";

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    </Provider>, document.getElementById('root')
);

reportWebVitals();
