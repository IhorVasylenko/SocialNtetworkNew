import React, {useEffect} from 'react';
import {Profile} from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/store";
import {actions, InitialProfilePageStateType} from "../../../redux/profilePageReducer";
import {Dispatch} from "redux";
import {profileAPI} from "../../../api/api";
import { withRouter } from "react-router-dom";
import {RouteComponentProps} from "react-router";
import {PreLoader} from "../../../common/preLoader/preLoader";

type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType>

const ProfileContainer = (props: PropsType) => {
    let userData = useSelector<AppRootStateType, InitialProfilePageStateType>(state => state.profilePage);
    const dispatch: Dispatch<any> = useDispatch();

    let userId: number = parseInt(props.match.params.userId);

    if (!userId) {
        userId = 12825
    }


    const getMyProfileData = async () => {
        const data = await profileAPI.getUserData(userId);
        dispatch((actions.followSuccess({profile: data, followed: false,})));
    };

    useEffect(()=> {
        getMyProfileData()
    }, []);


    if (userId === 0) {
        return <PreLoader />
    }

    return (
        <Profile profile={userData.profile} followed={userData.followed}/>
    )
};

export default withRouter(ProfileContainer);