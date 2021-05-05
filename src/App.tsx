import React from 'react';
import './App.css';
import Header from "./component/User/header/Header";
import Body from "./component/User/body/Body";
import Footer from "./component/User/footer/Footer";
import {RootStateType} from "./component/redux/state";

export const myId = '116355' // необходим для реализации логики, в дальнейшем получу с сервера

function App(props: {state: RootStateType }) {
  return (
    <div className="App">
      <Header />
      <Body state={props.state}/>
      <Footer />
    </div>
  );
}

export default App;
