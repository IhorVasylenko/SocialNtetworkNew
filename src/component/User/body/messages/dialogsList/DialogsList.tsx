import React from 'react';
import style from './DialogsList.module.css'
import DialogItem from "./dilogItem/DialogItem";
import Search from "../../../../common/search/Search";
import {DialogItemPropsType, MenuPositionType} from "../../../../redux/store";
import HamburgerMenu from "../../../../common/hamburgerMenu/HamburgerMenu";

function DialogsList (props: { positionsData: MenuPositionType[], dialogsData: DialogItemPropsType[] }) {
    const dialogsList = props.dialogsData.map( d =>
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
                <HamburgerMenu id={'dialogsHamburgerMenu'} menuPositions={props.positionsData}/>
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