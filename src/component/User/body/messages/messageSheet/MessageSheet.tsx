import React, {MutableRefObject, useEffect, useRef} from 'react';
import style from './MessageSheet.module.css'
import MessageItem from "./messageItem/MessageItem";
import {MessagesPropsType} from "../../../../redux/state";

function MessageSheet (props: {messagesData: MessagesPropsType[]}) {
    const divRef: MutableRefObject<null> = useRef(null);   //срабатывают все scrolls

    useEffect(() => {
        divRef.current.scrollIntoView({ behavior: 'smooth' });
    });

    const messagesList = props.messagesData.map( mi =>
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