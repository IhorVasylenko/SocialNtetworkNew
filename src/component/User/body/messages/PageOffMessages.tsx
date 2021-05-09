import React from 'react';
import style from './PageOffMessages.module.css'
import MessageSheet from "./messageSheet/MessageSheet";
import DialogsList from "./dialogsList/DialogsList";
import {AddMessageForm} from "./addMessageForm/AddMessageForm";
import {ActionTypes, RootStateType} from "../../../redux/store";

type PageOffMessagesPropsType = {
    state: RootStateType
    dispatch: (action: ActionTypes) => void
}

function PageOffMessages (props: PageOffMessagesPropsType) {
    return (
        <div className={style.container}>
            <div className={style.control}>
                control
            </div>
            <div className={style.content}>
                <MessageSheet messagesData={props.state.messagesData}/>
                <AddMessageForm dispatch={props.dispatch}/>
            </div>
            <div className={style.extra}>
                <DialogsList positionsData={props.state.positionsData} dialogsData={props.state.dialogsData}/>
            </div>
        </div>
    )
}

export default PageOffMessages