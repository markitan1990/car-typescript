import s from '../header.module.scss'
import React from "react";

type Props = {
    value: string
}
export const ButtonFlip = ({value}: Props) => {
    return <a href="http://localhost:3000/" className={s.btn_flip} data-back={value} data-front={value}>{value}</a>;
}