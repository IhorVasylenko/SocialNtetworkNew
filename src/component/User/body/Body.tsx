import React from 'react';
import style from './Body.module.css'
import  {Route} from "react-router-dom";
import Profile from "./profile/Profile";
import Settings from "./settings/Settings";
import Posts from "./posts/Posts";
import Music from "./music/Music";
import PageOffMessages from "./messages/PageOffMessages";
import Images from "./images/Images";
import MyFriends from "./friends/myFriends/MyFriends";
import AddFriends from "./friends/addFriends/AddFriends";
import {RootStateType} from "../../redux/state";

function Body (props: {state: RootStateType}) {
    return (
        <div className={style.container}>
            <Route path='/profile' render={ () => <Profile /> } />
            <Route path='/settings' render={ () => <Settings /> } />
            <Route path='/posts' render={ () => <Posts /> } />
            <Route path='/music' render={ () => <Music /> } />
            <Route path='/messages' render={ () => <PageOffMessages state={props.state}/> } />
            <Route path='/images' render={ () => <Images /> } />
            <Route path='/myFriends' render={ () => <MyFriends /> } />
            <Route path='/addFriends' render={ () => <AddFriends /> } />
        </div>
    )
}

export default Body