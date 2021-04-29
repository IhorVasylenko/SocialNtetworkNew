import React from 'react';
import './App.css';
import Header from "./component/User/header/Header";
import Body from "./component/User/body/Body";
import Footer from "./component/User/footer/Footer";

export const newDate = `${new Date().getHours()}:${new Date().getMinutes()}` //необходимо будет заменить для получения текущего времени
export const myId = '116355' // необходим для реализации логики, в дальнейшем получу с сервера

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
