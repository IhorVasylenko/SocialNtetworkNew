import React from 'react';
import style from './Images.module.css'

function Images () {
    return (
        <div className={style.container}>
            <div className={style.control}>
                control
            </div>
            <div className={style.content}>
                images content
            </div>
        </div>
    )
}

export default Images