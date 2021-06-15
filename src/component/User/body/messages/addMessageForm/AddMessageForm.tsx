import style from "./AddMessageForm.module.css";
import React, {ChangeEvent, useEffect, useState} from "react";
import attachmentIcon from '../../../../common/image/defoultIcons/attachmentIcon.png'
import emojiIcon from '../../../../common/image/defoultIcons/emojiIcon.png'
import sendMessageIcon from '../../../../common/image/defoultIcons/sendMessageIcon.png'
import recordIcon from '../../../../common/image/defoultIcons/recordIcon.png'
import {addNewMessageAC} from "../../../../redux/messagesReducer";
import {Dispatch} from "redux";
import {useDispatch} from "react-redux";


export function AddMessageForm() {
    const [value,setValue] = useState('');
    const [buttonState, setButtonState] = useState(sendMessageIcon); //стейт на кноку, с изначальной jsx разметкой


    const dispatch: Dispatch<any> = useDispatch()

    const changeValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
    };

    useEffect(() => (value.trim() !== '') ? setButtonState(sendMessageIcon) : setButtonState(recordIcon), [value] ) // зависимость добавил чтобы убрать ворнинг в консоле

    const addMessage = () => {   // контейнер над функцией добавления сообщений
        dispatch(addNewMessageAC(value));
        setValue('');
    };

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
    );
}