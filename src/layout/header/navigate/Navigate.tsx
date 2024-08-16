import s from "../header.module.scss";
import {navigateValue} from "../../../common/consts/consts";
import React from "react";
import {ButtonFlip} from "../buttonFlip";


export const Navigate = () =>{
    return (
        <>
            <div className={s.navigate}>
                {navigateValue.map(i =>
                    <ButtonFlip key={i.value} value={i.value}/>
                )}
            </div>
        </>
    );
}