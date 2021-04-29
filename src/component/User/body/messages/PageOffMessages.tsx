import React from 'react';
import style from './PageOffMessages.module.css'
import MessageSheet from "./messageSheet/MessageSheet";
import DialogsList from "./dialogsList/DialogsList";
import {AddMessageForm} from "./addMessageForm/AddMessageForm";

function PageOffMessages () {
    return (
        <div className={style.container}>
            <div className={style.control}>
                control
            </div>
            <div className={style.content}>
                <MessageSheet />
                <AddMessageForm />
            </div>
            <div className={style.extra}>
                <DialogsList />
            </div>
        </div>
    )
}

export default PageOffMessages