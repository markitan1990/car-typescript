import s from "../header.module.scss";
import {navigateValue} from "../../../common/consts/consts";
import React from "react";
import {ButtonFlip} from "../buttonFlip";

export const NavigateMobile = () => {
    return (
        <div className={s.wrapper_mobile}>
            <div className={s.navigate_mobile}>
                {navigateValue.map(i =>
                    <ButtonFlip key={i.value} value={i.value}/>
                )}</div>
        </div>
    );
}