import React from "react";
import s from './preLoader.module.css';
import loading from './loadingSVG.svg'



export const PreLoader = () => {
    return <div className={s.container}>
        <img src={loading} alt={'preLoader'}/>
    </div>
}
