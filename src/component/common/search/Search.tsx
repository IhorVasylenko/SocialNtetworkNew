import React from "react";
import style from './Search.module.css';

const Search = () => {
    return (
        <form className={style.form}>
                <input type='text' className={style.formControl} placeholder='Search in Go to IT' />
        </form>
    )
}

export default Search