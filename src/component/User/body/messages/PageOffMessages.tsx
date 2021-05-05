import React from 'react';
import style from './PageOffMessages.module.css'
import MessageSheet from "./messageSheet/MessageSheet";
import DialogsList from "./dialogsList/DialogsList";
import {AddMessageForm} from "./addMessageForm/AddMessageForm";
import {RootStateType} from "../../../redux/state";

type PageOffMessagesPropsType = {
    state: RootStateType
    addNewMessage: (text: string) => void
}

function PageOffMessages (props: PageOffMessagesPropsType) {
    return (
        <div className={style.container}>
            <div className={style.control}>
                control
            </div>
            <div className={style.content}>
                <MessageSheet messagesData={props.state.messagesData}/>
                <AddMessageForm addNewMessage={props.addNewMessage}/>
            </div>
            <div className={style.extra}>
                <DialogsList positionsData={props.state.positionsData} dialogsData={props.state.dialogsData}/>
            </div>
        </div>
    )
}

export default PageOffMessages