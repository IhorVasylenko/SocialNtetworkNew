import {InferActionTypes} from "./store";
import {ProfilePropsType} from "../User/body/profile/Profile";


const profilePageInitialState = {
    profile: {
        photos: {
            large: '',
            small: '',
        },
        contacts: {
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        },
        fullName: '',
        userId: 0,
    },
    followed: false,
} as ProfilePropsType;


export type InitialProfilePageStateType = typeof profilePageInitialState;
export type ProfilePageActionType = InferActionTypes<typeof actions>


export const profilePageReducer = (state: InitialProfilePageStateType = profilePageInitialState, action: ProfilePageActionType)
    : InitialProfilePageStateType => {
    switch (action.type) {
        case "goToIt/profilePage/SET_USERS_PROFILE":
            return {
                ...state,
                ...action.data,
            };
        default:
            return state;
    }
};


export const actions = {
    followSuccess: (data: ProfilePropsType) => ({
        type: "goToIt/profilePage/SET_USERS_PROFILE",
        data
    } as const),
};



