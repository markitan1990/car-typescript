import {Icon} from '../icon';
import {clsx} from "clsx";

import s from './index.module.scss';
import React from "react";


export interface ReportFormProps {
    isOpen: boolean;
    closeFormModal?: () => void;
}

export function ReportForm({isOpen, closeFormModal}: Readonly<ReportFormProps>) {

    return (
        <div className={clsx(s.report_box, isOpen && s.active)}>
            <button className={s.cross}></button>
            <Icon iconId={"cross"} viewBox={"0 0 18 18"} width={"18"} height={"18"}/>
            <button className={s.report_btn} onClick={closeFormModal}>Купить отчет от 78 ₽
            </button>
        </div>
    );
}
