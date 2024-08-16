import s from "./carBox.module.scss"
import React, {useEffect, useState} from 'react';
import {CardsCars} from "./cardsCars";
import {CarCardsType} from "../../../common/consts/types";
import axios from "axios";
import {testData} from "../../../common/consts";

export const CarBox = () => {
    const [data, setData] = useState<CarCardsType[] | undefined>(undefined);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const response = await axios.get("http://localhost:8080/api/car-cards");
            const carCards: CarCardsType[] = response.data;
            console.log(response)
            const shuffled = carCards.sort(() => 0.5 - Math.random());
            const selected = shuffled.slice(0, 6);

            setData(selected);
        } catch (error) {
            console.error("Ошибка при получении данных:", error);
        }
    }

    return (
        <>
            <div className={s.car_box}>
                <div className={s.car_box_text}>
                    <h4>Посмотрите наши автомобили в наличии</h4>
                    <h3>Лучшие Автомобили На Рынке</h3>
                    <h5>Мы предоставляем не только всю необходимую информацию о ходе транспортировки авто к месту
                        назначения, но и полное документальное сопровождение сделки и прозрачное ценообразование.</h5>
                </div>
                <div className={s.cards_cars}><CardsCars data={testData}/></div>
            </div>
        </>
    );
}




