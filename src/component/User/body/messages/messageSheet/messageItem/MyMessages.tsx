import React from "react";
import style from "./MessageItem.module.css";
import loadingIcon from "../../../../../common/image/defoultIcons/loadingIcon.png";
import notDeliveredIcon from "../../../../../common/image/defoultIcons/notDeliveredIcon.png";
import deliveredIcon from "../../../../../common/image/defoultIcons/deliveredIcon.png";
import seenIcon from "../../../../../common/image/defoultIcons/seenIcon.png";
import lookedOverIcon from "../../../../../common/image/defoultIcons/lookedOverIcon.png";
import {MessageItemPropsType} from "./MessageItem";
import {MessageStatusType} from "../../dialogsList/dilogItem/DialogItem";

export const MyMessages = (props: MessageItemPropsType) => {

    const messageStatus/*:MessageStatusType*/ = (props.statusOffMessage === 'load') ? //не могу прописать типизацию, также вопрос можно ли заменить undefined
        loadingIcon : (props.statusOffMessage === 'notDelivery') ?
            notDeliveredIcon : (props.statusOffMessage === 'delivery') ?
                deliveredIcon : (props.statusOffMessage === 'seen') ?
                    seenIcon : (props.statusOffMessage === 'lookedOver') ? lookedOverIcon : undefined;

    return (
        <div className={style.wrapperR}>
            <div className={`${(props.order === 'last') ? style.containerLAstMessageR : style.containerPreviousMessageR}`}>
                {props.lastMessageText}
                <div className={style.messageDate}>
                    {props.dateOffMessage}
                    <img src={messageStatus} alt="messageStatus"/>
                </div>
            </div>
            {(props.order === 'last') ? <div className={style.xR} /> : null}
        </div>
    )
}