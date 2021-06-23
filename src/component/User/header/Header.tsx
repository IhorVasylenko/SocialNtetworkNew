import React from 'react';
import style from './Header.module.css'
import logo from '../../common/image/logoImage/logoDarkPrimery0288D1.png'
import { NavLink } from 'react-router-dom';
import Search from "../../common/search/Search";
import noAvatar from '../../common/image/defoultIcons/noPhotoAvatar.png'
import {MenuItemSubmenu} from "../../common/menuItemSubmenu/MenuItemSubmenu";

function Header () {
    return (
        <div className={style.header}>
            <NavLink className={style.logoLink} to=''>
                <img src={logo} alt='logo'/>
            </NavLink>
            <Search id={'header'} title={'Search in Go to IT'}/>
            <div className={style.submenuWrapper}>
                <NavLink className={style.link} to={'/profile'}>
                    Profile
                </NavLink>
                <MenuItemSubmenu menuName={'news'} subMenu={['posts','messages']} />
                <MenuItemSubmenu menuName={'media'} subMenu={['images','music']} />
                <MenuItemSubmenu menuName={'friends'} subMenu={['my Friends','add Friends']} />
                <NavLink className={style.link} to={'./settings'}>
                    Settings
                </NavLink>
            </div>
            <div className={style.loginBlock}>
                <img src={noAvatar} alt=""/>
                <div className={style.name}>Ihor Vasylenko</div>
                <ul className={style.logInLOgOutContainer}>
                    <li>LogOut</li>
                    <li>Information</li>
                </ul>
            </div>
            {/*<div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>*/}
        </div>
    )
}

export default Header