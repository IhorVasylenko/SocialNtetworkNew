import React from 'react';
import style from './DialogItem.module.css'
import noAvatar from '../../../../../common/image/defoultIcons/noPhotoAvatar.png'
import {DialogItemPropsType} from "../../../../../redux/state";
import {DisplayMessageStatus} from "../../../../../HOC/displayMessageStatus/DisplayMessageStatus";
import {OnlineStatus} from "../../../../../HOC/onlineStatus/OnlineStatus";

function DialogItem(props: DialogItemPropsType) {

    return (
        <div tabIndex={0} className={style.container}>
            <div className={style.avatarWrapper}>
                <img src={(props.authorAvatar !== null) ? props.authorAvatar : noAvatar} alt="author avatar"/> {/*при отсутствии аватарки ставим заглушку*/}
            </div>
            <div className={style.lineOneWrapper}>
                {OnlineStatus(props.onlineAuthor)}
                <div className={style.dialogAuthorName}>
                    {props.authorName}
                </div>
                <div className={style.messageStatus}>
                    <img src={DisplayMessageStatus(props.messageStatus)} alt="messageStatus"/>
                </div>
                <div className={style.toDate}>
                    {props.messageDate}
                </div>
            </div>
            <div className={style.lineTwoWrapper}>
                <div className={style.lastMessageAuthorName}>
                    {props.lastMessageAuthorName}
                </div>
                <div className={style.lastMessageText}>
                    {props.lastMessageText}
                </div>
                <div className={`${(props.unViewedMessageCounter === null) ? '' : (props.timePassed / 24 < 1) ? // проверяем сколько времени прошло с момента отправки или доставки сообщения
                    style.unViewedMessageCounterRecent : style.unViewedMessageCounterOldest}`}>
                    {props.unViewedMessageCounter}
                </div>
            </div>
        </div>
    )
}

export default DialogItem