import React from 'react';
import './BtnRadio.css';
import cn from "classnames";

const BtnRadio = ({title, item, selected, onClick}) => {
    return (
        <button 
            className={cn("BtnRadio", {selected})}
        >{title}</button>
    )
}

export default BtnRadio;