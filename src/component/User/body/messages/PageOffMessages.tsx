import React from 'react';
import style from './PageOffMessages.module.css'
import MessageSheet from "./messageSheet/MessageSheet";
import DialogsList from "./dialogsList/DialogsList";
import {AddMessageForm} from "./addMessageForm/AddMessageForm";
import {RootStateType} from "../../../redux/state";

function PageOffMessages (props: {state: RootStateType}) {
    return (
        <div className={style.container}>
            <div className={style.control}>
                control
            </div>
            <div className={style.content}>
                <MessageSheet messagesData={props.state.messagesData}/>
                <AddMessageForm />
            </div>
            <div className={style.extra}>
                <DialogsList positionsData={props.state.positionsData} dialogsData={props.state.dialogsData}/>
            </div>
        </div>
    )
}

export default PageOffMessages