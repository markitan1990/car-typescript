import React from "react";

import s from './../index.module.scss'

interface ButtonFlipProps {
    value: string
}
export function ButtonFlip ({value}: Readonly<ButtonFlipProps>) {
    return (
        <button>
        <a href="http://localhost:3000/" className={s.btn_flip} data-back={value} data-front={value}>{value}</a>
        </button>
)
}