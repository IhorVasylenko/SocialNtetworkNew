import React from "react";
import styles from './Friends.module.css';
import {NavLink} from "react-router-dom";
import noAvatar from "../../../common/image/defoultIcons/noPhotoAvatar.png";


export type UsersDataType = {
    id: number
    photos: {
        small: string,
        large: string,
    }
    followed: boolean
    name: string
    status: string
};
export type UserContentAddFriendsType = {
    usersData: UsersDataType[]
    followingInProgress: number[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    follow: (id: number) => void
    unfollow: (id: number) => void
    onPageChanged: (p: number) => void
};


export const UserContentAddFriends = React.memo((
                                                    {
                                                        usersData,
                                                        followingInProgress,
                                                        totalUsersCount,
                                                        pageSize,
                                                        currentPage,
                                                        follow,
                                                        unfollow,
                                                        onPageChanged,
                                                    }: UserContentAddFriendsType) => {

    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.usersCardsWrapper}>
                {usersData.map(u =>
                    <div key={u.id} className={styles.container}>
                        <div>
                            <div className={styles.profileAvatar}>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : noAvatar} alt={'author'}/>
                                </NavLink>
                            </div>
                            <div className={styles.buttonFollow}>
                                {
                                    u.followed
                                        ? <button disabled={followingInProgress.some((id: number) => id === u.id)}
                                                  onClick={() => {follow(u.id);}}>Unfollow</button>
                                        : <button disabled={followingInProgress.some((id: number) => id === u.id)}
                                                  onClick={() => {unfollow(u.id);}}>Follow</button>
                                }
                            </div>
                        </div>
                        <div className={styles.textArea}>
                            <div className={styles.profileName}>
                                {u.name != null ? u.name : 'noname'}
                            </div>
                            <div className={styles.profileStatus}>
                                {
                                    u.status != null
                                        ? u.status
                                        : ''
                                }
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className={styles.pagenation}>
                {pages.map(p => {
                    return (
                        <span
                            key={p}
                            className={currentPage === p ? styles.selectedPage : undefined}
                            onClick={() => {onPageChanged(p)}}>
                            {" " + p + " "}
                        </span>
                    )
                })}
            </div>
        </div>
    );
});
