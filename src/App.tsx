import React from 'react';
import './App.css';
import Header from "./component/User/header/Header";
import Body from "./component/User/body/Body";
import Footer from "./component/User/footer/Footer";
import {StoreType} from "./component/redux/state";

type AppPropsType = {
    store: StoreType
}

function App(props: AppPropsType) {
  return (
    <div className="App">
      <Header />
      <Body state={props.store.getState()} dispatch={props.store.dispatch.bind(props.store)}/>
      <Footer />
    </div>
  );
}

export default App;