import React from 'react';
import './BtnRadio.css';
import cn from "classnames";

const BtnRadio = ({item, selected, onClick}) => {
    return (
        <div 
            className={cn("BtnRadio", {selected})}
            onClick={() => onClick(item.id)}
        >{item.title}</div>
    )
}

export default BtnRadio;