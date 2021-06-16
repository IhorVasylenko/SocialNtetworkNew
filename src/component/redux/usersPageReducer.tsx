import {UsersDataType} from "../User/body/friends/Friends";
import {followAPI, usersAPI} from "../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppRootStateType, CommonActionTypeForApp, InferActionTypes} from "./store";
import {MapStateToFriendsPropsType} from "../User/body/friends/FriendsContainer";


const usersPageInitialState = {
    usersData: [],
    pageSize: 16,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
} as MapStateToFriendsPropsType;


export type ThunkType = ThunkAction<void, AppRootStateType, unknown, CommonActionTypeForApp>;
export type ThunkDispatchType = ThunkDispatch<AppRootStateType, unknown, CommonActionTypeForApp>
export type InitialUsersPageStateType = typeof usersPageInitialState;
export type UsersPageActionType = InferActionTypes<typeof actions>


export const usersPageReducer = (state: InitialUsersPageStateType = usersPageInitialState, action: UsersPageActionType)
    : InitialUsersPageStateType => {
    switch (action.type) {
        case "goToIt/usersPage/FOLLOW":
            return {
                ...state,
                usersData: state.usersData.map((u: UsersDataType) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            };
        case "goToIt/usersPage/UNFOLLOW":
            return {
                ...state,
                usersData: state.usersData.map((u: UsersDataType) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            };
        case "goToIt/usersPage/SET_USERS":
            return {
                ...state,
                usersData: action.usersData
            };
        case "goToIt/usersPage/SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            };
        case "goToIt/usersPage/SET_TOTAL_USERS_COUNT":
            return {
                ...state,
                totalUsersCount: action.totalCount
            };
        case "goToIt/usersPage/TOGGLE_IS_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            };
        case "goToIt/usersPage/TOGGLE_IS_FOLLOWING_PROGRESS":
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id: number) => id !== action.userId)
            };
        default:
            return state;
    }
};


const actions = {
    followSuccess: (userId: number) => ({
        type: "goToIt/usersPage/FOLLOW",
        userId,
    } as const),
    unfollowSuccess: (userId: number) => ({
        type: "goToIt/usersPage/UNFOLLOW",
        userId,
    } as const),
    setUsers: (usersData: UsersDataType[]) => ({
        type: "goToIt/usersPage/SET_USERS",
        usersData,
    } as const),
    setCurrentPage: (currentPage: number) => ({
        type: "goToIt/usersPage/SET_CURRENT_PAGE",
        currentPage,
    } as const),
    setTotalUsersCount: (totalCount: number) => ({
        type: "goToIt/usersPage/SET_TOTAL_USERS_COUNT",
        totalCount,
    } as const),
    toggleIsFetching: (isFetching: boolean) => ({
        type: "goToIt/usersPage/TOGGLE_IS_FETCHING",
        isFetching,
    } as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({
        type: "goToIt/usersPage/TOGGLE_IS_FOLLOWING_PROGRESS",
        isFetching,
        userId,
    } as const),
};


export const getUsers = (requestedPage: number, pageSize: number,): ThunkType => {
    return async (dispatch: ThunkDispatchType) => {
        dispatch(actions.toggleIsFetching(true))
        dispatch(actions.setCurrentPage(requestedPage))

        const data = await usersAPI.getUsers(requestedPage, pageSize,)

        dispatch(actions.toggleIsFetching(false))
        dispatch(actions.setUsers(data.items))
        dispatch(actions.setTotalUsersCount(data.totalCount))
    }
};
const followUnfollowFlow = async (dispatch: ThunkDispatchType, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(actions.toggleFollowingProgress(true, userId))
    let data = await apiMethod(userId)
    dispatch(actions.toggleFollowingProgress(false, userId))
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
};
export const unfollow = (userId: number): ThunkType => {
    return async (dispatch: ThunkDispatchType) => {
        followUnfollowFlow(dispatch, userId, followAPI.follow.bind(followAPI), actions.followSuccess)
    }
};
export const follow = (userId: number): ThunkType => {
    return async (dispatch: ThunkDispatchType) => {
        followUnfollowFlow(dispatch, userId, followAPI.unfollow.bind(followAPI), actions.unfollowSuccess)
    }
};

