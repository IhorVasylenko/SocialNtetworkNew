import React, {useState} from 'react';
import style from './HamburgerMenu.module.css'
import {NavLink} from "react-router-dom";
import {HamburgerMenuPropsType} from "../../redux/state";



function HamburgerMenu (props: HamburgerMenuPropsType) {
    let [classStyles, setClassStyles] = useState('')
    const changeClassHandler = () => {
        if (classStyles === '') {
            setClassStyles(`${style.active}`)
        } else {
            setClassStyles('')
        }
    }

    const MenuPositions = props.menuPositions.map(p =>
        <li key={p.id} className={style.menuPositionLi}>
            <NavLink to={p.path} className={style.link}>
                {p.title}
            </NavLink>
        </li>
    )

    return (
        <div className={style.container}>
            <div className={classStyles}>
                <button className={style.navTgl} type='button' aria-label="toggle menu"
                        onClick={() => changeClassHandler()}>
                    <span aria-hidden="true"> </span>
                </button>
                <nav className={style.nav}>
                    { (classStyles === `${style.active}`) ? <ul>{MenuPositions}</ul> : null}
                </nav>
            </div>
        </div>
    )
}

export default HamburgerMenu