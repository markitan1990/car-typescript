import {Icon} from '../icon';
import {Button} from "../button";
import {clsx} from "clsx";

import s from './index.module.scss';
import React from "react";


export interface ReportFormProps {
    isOpen: boolean;
    closeFormModal?: () => void;
}

export function ReportForm({isOpen}: Readonly<ReportFormProps>) {

    return (
        <div className={clsx(s.report_box, isOpen && s.active)}>
                    <button className={s.cross}></button>
                    <div className={s.user_box}>
                        <h1 className={s.title_form}>Мы с вами свяжемся</h1>
                        <Button value={'Отправить сообщение'} type="submit" variant={'primary2'} className={s.submit_btn}/>
                    </div>
        </div>
    );
}
