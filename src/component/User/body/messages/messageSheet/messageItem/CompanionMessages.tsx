import React from "react";
import style from "./MessageItem.module.css";
import {MessageItemPropsType} from "./MessageItem";

export const CompanionMessages = (props: MessageItemPropsType) => {
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