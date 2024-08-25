import React from "react";
import {CarCardsType} from "../../../../consts/types";
import {CardCar} from "../card-car";

import s from "../index.module.scss";

interface CardsCarsProps {
    data?: CarCardsType[]
}

export function CardsCars({data}: Readonly<CardsCarsProps>) {
    return (
        <div className={s.cards_wrapper}>
            {data?.map((carData: CarCardsType, index) => (
                <CardCar key={carData.id} data={{index: index, carCards: carData}}/>
            ))}
        </div>
    )
}