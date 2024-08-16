import React from "react";
import {CarCardsType} from "../../../../common/consts/types";
import {CardCar} from "../cardCar";
import s from "../carBox.module.scss";

type Props = {
    data?: CarCardsType[]
}
export const CardsCars = ({data}: Props) => {
    return (
        <div className={s.container2}>
            {data?.map((carData: CarCardsType, index) => (
                <div className={s.card}>
                    <CardCar key={index} data={{index: index, carCards: carData}}/>
                </div>
            ))}
        </div>
    )
}