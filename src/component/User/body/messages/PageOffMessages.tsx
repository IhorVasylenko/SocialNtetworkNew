import * as React from 'react';
import style from './PageOffMessages.module.css'
import MessageSheet from "./messageSheet/MessageSheet";
import DialogsList from "./dialogsList/DialogsList";
import {AddMessageForm} from "./addMessageForm/AddMessageForm";
import {RootStateType} from "../../../../App";

type PageOffMessagesPropsType = {
    state: RootStateType,
}

function PageOffMessages (props: PageOffMessagesPropsType) {
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
                <DialogsList positionsData={props.state.positionsData} dialogsData={props.state.dialogsData}/>
            </div>
        </div>
    );
};

export default PageOffMessages;