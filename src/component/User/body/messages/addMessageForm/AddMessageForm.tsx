import style from "./AddMessageForm.module.css";
import React from "react";
import attachmentIcon from '../../../../common/image/defoultIcons/attachmentIcon.png'
import emojiIcon from '../../../../common/image/defoultIcons/emojiIcon.png'
import recordIcon from '../../../../common/image/defoultIcons/recordIcon.png'

export function AddMessageForm() {
    return (
        <div className={style.container}>
            <button className={style.attach} >
                <img src={attachmentIcon} alt="attachmentIcon"/>
            </button>
            <textarea className={style.inputField} placeholder={' Write a message...'} />
            <button className={style.emoji} >
                <img src={emojiIcon} alt="emojiIcon"/>
            </button>
            <button className={style.soundOrVideo} >
                <img src={recordIcon} alt="recordIcon"/>
            </button>
        </div>
    )
}