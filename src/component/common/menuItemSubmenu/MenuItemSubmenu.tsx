import React from "react";
import style from './MenuItemSubmenu.module.css';
import { NavLink } from 'react-router-dom';

type PropsType = {
    menuName: string
    subMenu: Array<string>
}

const MenuItemSubmenu = (props: PropsType) => {
    const links = props.subMenu.map( l => <li key={l}><NavLink to={`./${l.replace(' ','')}`}>{l}</NavLink></li> )

    return (
        <div className={style.menuWrapper}>
            <div className={style.menuName}>
                {props.menuName}
            </div>
            <ul className={style.subMenu}>
                {links}
            </ul>
        </div>
    )
};

export default MenuItemSubmenu