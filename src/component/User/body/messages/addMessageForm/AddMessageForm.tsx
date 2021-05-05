import style from "./AddMessageForm.module.css";
import React, {ChangeEvent, useState} from "react";
import attachmentIcon from '../../../../common/image/defoultIcons/attachmentIcon.png'
import emojiIcon from '../../../../common/image/defoultIcons/emojiIcon.png'
import recordIcon from '../../../../common/image/defoultIcons/recordIcon.png'

export function AddMessageForm() {

    const ButtonRecordMessage = () => {
        return (
            <button className={style.soundOrVideo} >
                <img src={recordIcon} alt="recordIcon"/>
            </button>
        )
    }
    const ButtonSendMessage = () => {
        return (
            <button className={style.soundOrVideo} >
                <img src={emojiIcon} alt="recordIcon"/>
            </button>
        )
    }
    const [button, setButton] = useState(ButtonRecordMessage)
    const changeOnButtonSendMessage = () => {
        setButton(ButtonSendMessage)
    }
    const changeOnButtonRecordMessage = () => {
        setButton(ButtonRecordMessage)
    }



    const [value,setValue] = useState('')
    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        console.log(value)
        if(value !== '') {
            changeOnButtonSendMessage()
        }
        if(value === '') {
            changeOnButtonRecordMessage()
        }

    }


    const newMessageElement = React.createRef()
    const addMessage = () => {
        let newText = newMessageElement.current.value
        console.log(newText)
    }

    return (
        <div className={style.container}>
            <button className={style.attach} >
                <img src={attachmentIcon} alt="attachmentIcon"/>
            </button>
            <textarea
                /*onInput={changeOnButtonSendMessage}
                onBlur={changeOnButtonRecordMessage}*/
                onChange={changeValue}
                ref={newMessageElement}
                className={style.inputField} placeholder={' Write a message...'}
                value={value}
            />
            <button className={style.emoji} >
                <img src={emojiIcon} alt="emojiIcon"/>
            </button>
            {button}
        </div>
    )
}