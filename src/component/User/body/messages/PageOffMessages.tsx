import React from 'react';
import style from './PageOffMessages.module.css'
import MessageSheet from "./messageSheet/MessageSheet";
import DialogsList from "./dialogsList/DialogsList";

function PageOffMessages () {
    return (
        <div className={style.container}>
            <div className={style.control}>
                control
            </div>
            <MessageSheet />
            <DialogsList/>
        </div>
    )
}

export default PageOffMessages