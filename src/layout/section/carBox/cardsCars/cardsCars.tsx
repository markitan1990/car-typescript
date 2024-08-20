import React from "react";
import {CarCardsType} from "../../../../common/consts/types";
import {CardCar} from "../cardCar";
import s from "../carBox.module.scss";

type Props = {
    data?: CarCardsType[]
    isMobile: boolean
}
export const CardsCars = ({data, isMobile}: Props) => {
    return (
        <div className={s.cards_wrapper}>
            {data?.map((carData: CarCardsType, index) => (
                <CardCar key={index} data={{index: index, carCards: carData}} isMobile={isMobile}/>
            ))}
        </div>
    )
}