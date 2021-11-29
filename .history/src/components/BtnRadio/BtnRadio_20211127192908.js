import React from 'react';
import './BtnRadio.css';
import cn from "classnames";

const BtnRadio = ({title, selected, onClick}) => {
    return (
        <button 
            className={cn("BtnRadio", {selected})}
            onClick={onClick}
        >{title}</button>
    )
}

export default BtnRadio;