import React from 'react';
import style from './Music.module.css'

function Music () {
    return (
        <div className={style.container}>
            <div className={style.control}>
                control
            </div>
            <div className={style.content}>
                music content
            </div>
        </div>
    )
}

export default Music