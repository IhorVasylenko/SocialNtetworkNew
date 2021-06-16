import {AppRootStateType} from "./store";
import {UsersDataType} from "../User/body/friends/Friends";

export const getUsersData = (state: AppRootStateType): UsersDataType[] => {
    return state.usersPage.usersData
};

export const getPageSize = (state: AppRootStateType): number => {
    return  state.usersPage.pageSize
};

export const getTotalUsersCount = (state: AppRootStateType): number => {
    return state.usersPage.totalUsersCount
};

export const getCurrentPage = (state: AppRootStateType): number => {
    return state.usersPage.currentPage
};

export const getIsFetching = (state: AppRootStateType): boolean => {
    return state.usersPage.isFetching
};

export const getFollowingInProgress = (state: AppRootStateType): number[] => {
    return state.usersPage.followingInProgress
};
