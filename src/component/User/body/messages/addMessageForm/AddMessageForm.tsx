import style from "./AddMessageForm.module.css";
import React, {ChangeEvent, useEffect, useState} from "react";
import attachmentIcon from '../../../../common/image/defoultIcons/attachmentIcon.png'
import emojiIcon from '../../../../common/image/defoultIcons/emojiIcon.png'
import sendMessageIcon from '../../../../common/image/defoultIcons/sendMessageIcon.png'
import recordIcon from '../../../../common/image/defoultIcons/recordIcon.png'
import {ActionTypes} from "../../../../redux/store";
import {addNewMessageAC} from "../../../../redux/messagesReducer";

type AddMessageForm = {
    dispatch: (action: ActionTypes) => void
}

export function AddMessageForm(props: AddMessageForm) {
    const [value,setValue] = useState('')
    const [buttonState, setButtonState] = useState(sendMessageIcon) //стейт на кноку, с изначальной jsx разметкой

    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    useEffect(() => (value.trim() !== '') ? setButtonState(sendMessageIcon) : setButtonState(recordIcon)
    )

    const addMessage = () => {   // контейнер над функцией добавления сообщений
        props.dispatch(addNewMessageAC(value))
        setValue('')
    }

    return (
        <div className={style.container}>
            <button className={style.attach} >
                <img src={attachmentIcon} alt="attachmentIcon"/>
            </button>
            <textarea
                onChange={changeValue}
                className={style.inputField} placeholder={' Write a message...'}
                value={value}
            />
            <button className={style.emoji} >
                <img src={emojiIcon} alt="emojiIcon"/>
            </button>
            <button className={style.soundOrVideo} >
                <img onClick={addMessage} src={buttonState} alt="recordIcon"/>
            </button>
        </div>
    )
}