import React from "react";
import {ButtonFlip} from "../../button-flip";
import {navigateValue} from "../../../../consts";

import s from "../../index.module.scss";

export function NavigateMobile () {
    return (
        <div className={s.wrapper_mobile}>
            <div className={s.navigate_mobile}>
                {navigateValue.map(i =>
                    <ButtonFlip key={i.value} value={i.value} path={i.path}/>
                )}</div>
        </div>
    );
}