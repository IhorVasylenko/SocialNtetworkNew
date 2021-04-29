import React from "react";
import s from './preLoader.module.css';
import loading from './loadingSVG.svg'



let PreLoader = () => {
    return <div className={s.container}>
        <img src={loading} alt={'preLoader'}/>
    </div>
}

export default PreLoader