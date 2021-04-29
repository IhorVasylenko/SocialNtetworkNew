import React from 'react';
import style from './MessageSheet.module.css'
import MessageItem, {MessagesPropsType} from "./messageItem/MessageItem";
import {v1} from "uuid";
import {newDate} from "../../../../../App";

function MessageSheet () {

    const messagesArray: Array<MessagesPropsType> = [
        {
            id: v1(),
            authorId: '1',
            dateOffMessage: newDate,     //должно фиксироваться время отправки сообщения
            lastMessageText: 'It is a dark time for the Rebellion. ',
            statusOffMessage: "lookedOver",
            order: ''
        },
        {
            id: v1(),
            authorId: '116355',
            dateOffMessage: newDate,
            lastMessageText: 'It is a dark time for the Rebellion. ',
            statusOffMessage: "lookedOver",
            order: ''
        },
        {
            id: v1(),
            authorId: '1',
            dateOffMessage: newDate,
            lastMessageText: 'It is a dark time for the RebellionIt is a dark time for the RebellionIt is a dark time for the Rebellion. ',
            statusOffMessage: "lookedOver",
            order: 'last'
        },
        {
            id: v1(),
            authorId: '116355',
            dateOffMessage: newDate,
            lastMessageText: 'It is a dark time for the RebellionIt is a dark time for the RebellionIt is a dark time for the Rebellion. ',
            statusOffMessage: "lookedOver",
            order: 'last'
        }
    ]

    const messagesList = messagesArray.map( mi =>
        <MessageItem
            key={mi.id}
            id={mi.id}
            authorId={mi.authorId}
            dateOffMessage={mi.dateOffMessage}
            lastMessageText={mi.lastMessageText}
            statusOffMessage={mi.statusOffMessage}
            order={mi.order}
        /> )

    return (
        <div className={style.container}>
            {messagesList}
        </div>
    )
}

export default MessageSheet