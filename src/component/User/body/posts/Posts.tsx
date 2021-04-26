import React from 'react';
import style from './Posts.module.css'

function Posts () {
    return (
        <div className={style.container}>
            <div className={style.control}>
                control
            </div>
            <div className={style.content}>
                posts content
            </div>
            <div className={style.extra}>
                extra
            </div>
        </div>
    )
}

export default Posts