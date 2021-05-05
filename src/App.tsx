import React from 'react';
import './App.css';
import Header from "./component/User/header/Header";
import Body from "./component/User/body/Body";
import Footer from "./component/User/footer/Footer";
import {RootStateType} from "./component/redux/state";

type AppPropsType = {
    state: RootStateType
    addNewMessage: (text: string) => void
}

function App(props: AppPropsType) {
  return (
    <div className="App">
      <Header />
      <Body state={props.state} addNewMessage={props.addNewMessage}/>
      <Footer />
    </div>
  );
}

export default App;
