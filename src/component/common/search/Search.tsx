import React from "react";
import style from './Search.module.css';

export type SearchPropsType = {
    id: string
    title: string
}

const Search = (props: SearchPropsType) => {
    return (
        <form className={style.form}>
                <input type='text' className={style.formControl} placeholder={props.title} />
        </form>
    )
}

export default Search

