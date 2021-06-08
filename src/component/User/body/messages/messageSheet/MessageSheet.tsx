import React, {MutableRefObject, useEffect, useRef} from 'react';
import style from './MessageSheet.module.css'
import MessageItem from "./messageItem/MessageItem";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../../redux/store";
import {InitialMessagesStateType} from "../../../../redux/messagesReducer";

function MessageSheet () {
    const messages = useSelector<AppRootStateType, InitialMessagesStateType>(state => state.messages)

    const divRef: MutableRefObject<null> = useRef(null);   //срабатывают все scrolls

    useEffect(() => {
        // @ts-ignore
        divRef.current.scrollIntoView({ behavior: 'smooth' });
    });

    const messagesList = messages.map( mi =>
        <MessageItem
            key={mi.id}
            id={mi.id}
            authorId={mi.authorId}
            dateOffMessage={mi.dateOffMessage}
            lastMessageText={mi.lastMessageText}
            statusOffMessage={mi.statusOffMessage}
            order={mi.order}
            myId={mi.myId}
        /> )

    return (
        <div className={style.container}>
            {messagesList}
            <div ref={divRef} />
        </div>

    )
}

export default MessageSheet