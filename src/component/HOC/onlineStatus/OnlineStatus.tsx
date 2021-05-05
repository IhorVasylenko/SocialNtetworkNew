import style from "./OnlineStatus.module.css";
import onLineIcon from "../../common/image/defoultIcons/onLineIcon.png";
import offLineIcon from "../../common/image/defoultIcons/offLineIcon.png";
import React from "react";


// отображает находиться ли автор в сети
export const OnlineStatus = (status:  boolean | null) => {
    return (
        (status === null) ? null : (status) ?
            <div className={style.online}>
                <img src={onLineIcon} alt="online"/>
            </div> :
            <div className={style.online}>
                <img src={offLineIcon} alt="offline"/>
            </div>
    )
}