import React from 'react';
import style from './MessageItem.module.css'
import {MessageStatusType} from "../../dialogsList/dilogItem/DialogItem";
import {MyMessages} from "./MyMessages";
import {CompanionMessages} from "./CompanionMessages";
import {myId} from "../../../../../../App";


export type OrderMessageType = 'last' | '' //этот тип будет добавляться последнему сообщению 'last' и менять у предидущих на ''
export type MessagesPropsType = {
    authorId: string
    id: string
    statusOffMessage: MessageStatusType
    lastMessageText: string
    order: OrderMessageType
    dateOffMessage: string
}
export type MessageItemPropsType = { //этот тип для компонент сообщения чтобы не кидать лишнего
    id: string
    statusOffMessage?: MessageStatusType
    order: OrderMessageType
    lastMessageText: string
    dateOffMessage: string
}


function MessageItem(props: MessagesPropsType) {

    return (
        <div className={style.container}>
            {(props.authorId === myId) ?   // определяем автора сообщения и подключаем соответствующий стиль
                <MyMessages
                    id={props.id}
                    dateOffMessage={props.dateOffMessage}
                    lastMessageText={props.lastMessageText}
                    order={props.order}
                    statusOffMessage={props.statusOffMessage}
                /> :
                <CompanionMessages
                    id={props.id}
                    dateOffMessage={props.dateOffMessage}
                    lastMessageText={props.lastMessageText}
                    order={props.order}
                />
            }
        </div>

    )
}

export default MessageItem