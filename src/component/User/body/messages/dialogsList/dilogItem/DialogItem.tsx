import React from 'react';
import style from './DialogItem.module.css'
import noAvatar from '../../../../../common/image/defoultIcons/noPhotoAvatar.png'
import onLineIcon from '../../../../../common/image/defoultIcons/onLineIcon.png'
import offLineIcon from '../../../../../common/image/defoultIcons/offLineIcon.png'
import loadingIcon from '../../../../../common/image/defoultIcons/loadingIcon.png'
import notDeliveredIcon from '../../../../../common/image/defoultIcons/notDeliveredIcon.png'
import deliveredIcon from '../../../../../common/image/defoultIcons/deliveredIcon.png'
import seenIcon from '../../../../../common/image/defoultIcons/seenIcon.png'
import lookedOverIcon from '../../../../../common/image/defoultIcons/lookedOverIcon.png'


export type MessageStatusType = 'load' | 'notDelivery' | 'delivery' | 'seen' | 'lookedOver' | undefined // как заменить на null?

export type DialogItemPropsType = {
    id: string
    onlineAuthor: boolean | null
    authorName: string
    messageDate: string
    messageStatus: MessageStatusType
    lastMessageAuthorName: string
    lastMessageText: string
    unViewedMessageCounter: number | null
    timePassed: number
    authorAvatar: string | null
}

function DialogItem(props: DialogItemPropsType) {

    const messageStatus = (props.messageStatus === 'load') ? // выбор иконки состояния сообщения в зависимости от пришедшего статуса
        loadingIcon : (props.messageStatus === 'notDelivery') ?
            notDeliveredIcon : (props.messageStatus === 'delivery') ?
                deliveredIcon : (props.messageStatus === 'seen') ?
                    seenIcon : (props.messageStatus === 'lookedOver') ? lookedOverIcon : undefined

    const onlineStatus = (props.onlineAuthor === null) ? null : (props.onlineAuthor) ? // отображает находиться ли автор в сети
        <div className={style.online}>
            <img src={onLineIcon} alt="online"/>
        </div> :
        <div className={style.online}>
            <img src={offLineIcon} alt="offline"/>
        </div>

    return (
        <div tabIndex={0} className={style.container}>
            <div className={style.avatarWrapper}>
                <img src={(props.authorAvatar !== null) ? props.authorAvatar : noAvatar} alt="author avatar"/> {/*при отсутствии аватарки ставим заглушку*/}
            </div>
            <div className={style.lineOneWrapper}>
                {onlineStatus}
                <div className={style.dialogAuthorName}>
                    {props.authorName}
                </div>
                <div className={style.messageStatus}>
                    <img src={messageStatus} alt="messageStatus"/>
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