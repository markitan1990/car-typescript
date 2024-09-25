import {useParams} from 'react-router-dom';
import {newTestData} from "../../consts";
import React from "react";
import {CarSlider} from "./car-slider";
import {CarInfoBox} from "./car-info-box";
import {CarBox} from "../home-page/sections";
import {Button, GoTopButton} from "../../components";

import '../../styles/globalStyles.scss'
import s from "./index.module.scss";

export function InfoPage() {
    const {id} = useParams();

    const car = newTestData.find(i => i.id === Number(id));

    return (
        <>
            {car &&
                <div className={s.info_page_wrapper}>
                    <div className={s.info_page}>
                        <CarSlider car={car}/>
                        <CarInfoBox car={car}/>
                    </div>
                    <Button value={'ffffffff'} variant={'primary2'} fullWidth={true}/>
                    <div  className={s.info_page_description}>
                        <h3>Комментарий продавца</h3>
                        <p >{car.description}</p>
                    </div>
                </div>
            }
            <CarBox/>
            <GoTopButton/>
        </>
    );
}

