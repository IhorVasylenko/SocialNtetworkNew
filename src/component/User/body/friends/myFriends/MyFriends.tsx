import React from 'react';
import style from './MyFriends.module.css'

function MyFriends () {
    return (
        <div className={style.container}>
            <div className={style.control}>
                control
            </div>
            <div className={style.content}>
                myMessages content
            </div>
            <div className={style.extra}>
                extra
            </div>
        </div>
    )
}

export default MyFriends