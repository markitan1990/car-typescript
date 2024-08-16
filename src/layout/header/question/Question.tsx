import React from "react";
import {Image} from "../../../components/image";
import s from '../header.module.scss'

export const Question = () => {
    return <>
        <div className={s.question}>
            <Image className={s.vector_phone} src='/img/Vectorphone.png' alt="Главная"/>
            <div className={s.question_info}>
                <p>Есть вопросы?</p>
                <a href="tel:+375291212117">+375 29 12 12 117</a>
            </div>
        </div>
    </>
}