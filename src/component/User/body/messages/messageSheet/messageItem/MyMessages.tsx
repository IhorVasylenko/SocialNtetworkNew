import React from "react";
import style from "./MessageItem.module.css";
import {DisplayMessageStatus} from "../../../../../HOC/displayMessageStatus/DisplayMessageStatus";
import {MessagesPropsType} from "../../../../../../App";


export const MyMessages = (props: MessagesPropsType) => {
    return (
        <div className={style.wrapperR}>
            <div className={`${(props.order === 'last') ? style.containerLAstMessageR : style.containerPreviousMessageR}`}>
                {props.lastMessageText}
                <div className={style.messageDate}>
                    {props.dateOffMessage}
                    <img src={DisplayMessageStatus(props.statusOffMessage)} alt="messageStatus"/>
                </div>
            </div>
            {(props.order === 'last') ? <div className={style.xR} /> : null}
        </div>
    )
}

