import axios from "axios";
import {UsersDataType} from "../User/body/friends/Friends";

const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "0590a1e8-ea10-4bc4-a086-b475e4beea64"
    },
});

type GetUsersType = {
    items: UsersDataType[]
    totalCount: number
    error: null | string
};
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}&friend=false`, {}).then(
            response => response.data
        );
    },
};

type FollowUnfollowType = {
    resultCode: number
    messages: string[]
    data: object
};
export const followAPI = {
    follow(id: number) {
        return instance.post<FollowUnfollowType>(`follow/${id}`, {}, {}).then(
            response => response.data
        );
    },
    unfollow(id: number) {
        return instance.delete<FollowUnfollowType>(`follow/${id}`, {}).then(
            response => response.data
        );
    },
};

/*export const profileAPI = {
    getUserData(userId) {
        return instance.get(`profile/` + userId, {}).then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId, {}).then(response => response.data)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status }, {}).then(response => response.data)
    }
};*/

/*export const authAPI = {
    me () {
        return instance.get(`auth/me`, {}).then(response => response.data);
    },
    login (email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe}, {}).then(response => response.data);
    },
    logout () {
        return instance.delete(`auth/login`, {}).then(response => response.data);
    }
}*/




