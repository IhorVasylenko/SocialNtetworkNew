import React from "react";
import {connect} from "react-redux";
import {follow, getUsers, unfollow} from "../../../redux/usersPageReducer";
import {UserContentAddFriends, UsersDataType} from "./Friends";
import {PreLoader} from "../../../common/preLoader/preLoader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersData
} from "../../../redux/FriendsSelektors";
import {AppRootStateType} from "../../../redux/store";

export type MapStateToFriendsPropsType = {
    usersData: UsersDataType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
};
type MapDispatchToFriendsPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    getUsers: (requestedPage: number, pageSize: number,) => void
};
type UserContentUsersPageContainerPropsType = MapStateToFriendsPropsType & MapDispatchToFriendsPropsType;

class UserContentUsersPageContainer extends React.Component<UserContentUsersPageContainerPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize,)
    };

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize,);
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <PreLoader/> : null }
                <UserContentAddFriends
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    usersData={this.props.usersData}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    };
}

/*const UserContentUsersPageContainer = (props: UserContentUsersPageContainerPropsType) => {
    useEffect(() => {
        props.getUsers(props.currentPage, props.pageSize,)
    }, [props.currentPage, props.pageSize]);

    const onPageChanged = useCallback((pageNumber: number) => {
        props.getUsers(pageNumber, props.pageSize,);
    }, [props.pageSize])

    return (
        <>
            {props.isFetching ? <PreLoader/> : null }
            <UserContentAddFriends
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChanged={onPageChanged}
                usersData={props.usersData}
                unfollow={props.unfollow}
                follow={props.follow}
                followingInProgress={props.followingInProgress}
            />
        </>
    )
};*/

const mapStateToProps = (state: AppRootStateType): MapStateToFriendsPropsType => {
    return {
        usersData: getUsersData(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
};

export default compose<React.ComponentType>(
    connect<MapStateToFriendsPropsType, MapDispatchToFriendsPropsType, {}, AppRootStateType>(
        mapStateToProps,
        {follow, unfollow, getUsers,},
        )) (UserContentUsersPageContainer);
