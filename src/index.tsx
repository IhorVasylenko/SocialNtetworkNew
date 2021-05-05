import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import myState from "./component/redux/state";
import {renderTree} from "./render";


renderTree(myState)

reportWebVitals();
