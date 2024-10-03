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
        <div className={s.wrapper}>
            <div className={clsx(s.report_box, isOpen && s.active)}>
                <div className={s.report_header}>
                    <div className={s.report_block}>
                        <Icon iconId={"ok_2"} viewBox={"0 0 52 52"} width={"52"} height={"52"}/>
                        <div className={s.report_block_1}>
                            <h3>ДТП не найдены</h3>
                            <h5>Нет подтверждённых аварий</h5>
                        </div>
                    </div>
                    <div className={s.report_block_2}>
                        <h5>Обновлено сегодня</h5>
                        <h5>По данным ГИБДД</h5>
                    </div>
                </div>
                <button className={s.report_btn} onClick={closeFormModal}>
                    Купить отчет от 78 ₽
                </button>

            </div>
            <Icon iconId={"cross"} viewBox={"0 0 18 18"} width={"18"} height={"18"} className={s.cross}/>
        </div>
    );
}
