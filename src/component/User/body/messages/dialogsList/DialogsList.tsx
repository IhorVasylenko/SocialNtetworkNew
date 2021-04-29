import React from 'react';
import style from './DialogsList.module.css'
import DialogItem, {DialogItemPropsType} from "./dilogItem/DialogItem";
import HamburgerMenu, {MenuPositionType} from "../../../../common/hamburgerMenu/HamburgerMenu";
import Search from "../../../../common/search/Search";
import {v1} from "uuid";
import {newDate} from "../../../../../App";

function DialogsList () {
    const positionsArray: Array<MenuPositionType> = [
        {id: v1(), title: 'first', active: false, path: '/profile'},
        {id: v1(), title: 'second', active: false, path: '/profile'},
        {id: v1(), title: 'third', active: false, path: '/profile'},
        {id: v1(), title: 'fourth', active: false, path: '/profile'},
        {id: v1(), title: 'fifth', active: false, path: '/profile'}
    ]

    const DialogsArray: Array<DialogItemPropsType> = [
        {id: v1(), onlineAuthor: false, authorName: 'Gleb',
            messageDate: newDate, messageStatus: 'load', lastMessageAuthorName: 'Gleb:',
            lastMessageText: 'It is a period of civil war. ',
            unViewedMessageCounter: 1, timePassed: 3, authorAvatar: null},
        {id: v1(), onlineAuthor: true, authorName: 'Marina',
            messageDate: newDate, messageStatus: 'notDelivery', lastMessageAuthorName: 'Marina:',
            lastMessageText: 'Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. ',
            unViewedMessageCounter: 10, timePassed: 101, authorAvatar: null},
        {id: v1(), onlineAuthor: false, authorName: 'Vlad',
            messageDate: newDate, messageStatus: 'delivery', lastMessageAuthorName: 'You:',
            lastMessageText: 'It is a dark time for the Rebellion. ',
            unViewedMessageCounter: 9, timePassed: 23, authorAvatar: null},
        {id: v1(), onlineAuthor: true, authorName: 'Iuliia',
            messageDate: newDate, messageStatus: 'seen', lastMessageAuthorName: 'You:',
            lastMessageText: 'Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. ',
            unViewedMessageCounter: null, timePassed: 24, authorAvatar: null},
        {id: v1(), onlineAuthor: null, authorName: 'Alina',
            messageDate: newDate, messageStatus: 'lookedOver', lastMessageAuthorName: 'Alina:',
            lastMessageText: 'It is a dark time for the Rebellion. ',
            unViewedMessageCounter: 115, timePassed: 25, authorAvatar: null}
    ]

    const dialogsList = DialogsArray.map( d =>
        <DialogItem
            key={d.id}
            id={d.id}
            authorName={d.authorName}
            onlineAuthor={d.onlineAuthor}
            messageDate={d.messageDate}
            messageStatus={d.messageStatus}
            lastMessageAuthorName={d.lastMessageAuthorName}
            lastMessageText={d.lastMessageText}
            unViewedMessageCounter={d.unViewedMessageCounter}
            timePassed={d.timePassed}
            authorAvatar={d.authorAvatar}
        />)

    return (
        <div className={style.container}>
            <div className={style.burgerMenuWrapper}>
                <HamburgerMenu id={'dialogsHamburgerMenu'} menuPositions={positionsArray}/>
            </div>
            <div className={style.searchWrapper}>
                <Search id={'dialogsSearch'} title={'Search...'}/>
            </div>
            <div className={style.dialogs}>
                {dialogsList}
            </div>
        </div>
    )
}

export default DialogsList