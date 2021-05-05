import React from 'react';
import style from './MessageItem.module.css'
import {MyMessages} from "./MyMessages";
import {CompanionMessages} from "./CompanionMessages";
import {MessagesPropsType} from "../../../../../redux/state";


function MessageItem(props: MessagesPropsType) {
    return (
        <div className={style.container}>
            {(props.authorId === props.myId) ?   // определяем автора сообщения и подключаем соответствующий стиль
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