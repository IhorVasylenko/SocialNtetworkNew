import * as React from 'react';
import style from './Body.module.css'
import  {Route} from "react-router-dom";
import Profile from "./profile/Profile";
import Settings from "./settings/Settings";
import Posts from "./posts/Posts";
import Music from "./music/Music";
import PageOffMessages from "./messages/PageOffMessages";
import Images from "./images/Images";
import {RootStateType} from "../../../App";
import UserContentUsersPageContainer from "./friends/FriendsContainer";

type BodyPropsType = {
    state: RootStateType,
};

function Body (props: BodyPropsType) {
    return (
        <div className={style.container}>
            <Route path='/profile/:userId?' render={ () => <Profile /> } />
            <Route path='/settings' render={ () => <Settings /> } />
            <Route path='/posts' render={ () => <Posts /> } />
            <Route path='/music' render={ () => <Music /> } />
            <Route path='/messages' render={ () => <PageOffMessages state={props.state}/> } />
            <Route path='/images' render={ () => <Images /> } />
            <Route path='/addFriends' render={ () => <UserContentUsersPageContainer /> } />
        </div>
    );
}

export default Body;