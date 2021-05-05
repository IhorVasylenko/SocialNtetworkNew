import React from "react";
import style from "./MessageItem.module.css";
import {MessagesPropsType} from "../../../../../redux/state";

export const CompanionMessages = (props: MessagesPropsType) => {
    return (
        <div className={style.wrapperL}>
            {(props.order === 'last') ? <div className={style.xL} /> : null} {/*определяем последее в очереди это сообщение или нет, и подключаем соответствующий класс*/}
            <div className={`${(props.order === 'last') ? style.containerLAstMessageL : style.containerPreviousMessageL}`}>
                {props.lastMessageText}
                <div className={style.messageDate}>
                    {props.dateOffMessage}
                </div>
            </div>
        </div>
    )
}