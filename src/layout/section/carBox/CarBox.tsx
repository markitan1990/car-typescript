import s from "./carBox.module.scss"
import React, {useEffect, useMemo, useState} from 'react';
import {CardsCars} from "./cardsCars";
import {CarCardsType} from "../../../common/consts/types";
import axios from "axios";
import {testData} from "../../../common/consts";
import {useWindowSize} from "react-use";

export const CarBox = () => {
    const { width } = useWindowSize();
    const [data, setData] = useState<CarCardsType[] | undefined>(undefined);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const response = await axios.get("/api/car-cards");
            const carCards: CarCardsType[] = response.data;

            const shuffled = carCards.sort(() => 0.5 - Math.random());
            const selected = shuffled.slice(0, 6);

            setData(selected);
        } catch (error) {
            setData(testData);
            console.error("Ошибка при получении данных: сервер не доступ", error);
        }
    }

    const isMobile = useMemo(() => width < 582, [width]);

    return (
        <>
            <div className={s.car_box}>
                <div className={s.car_box_text}>
                    <h4>Посмотрите наши автомобили в наличии</h4>
                    <h3>Лучшие Автомобили На Рынке</h3>
                    <h5>Мы предоставляем не только всю необходимую информацию о ходе транспортировки авто к месту
                        назначения, но и полное документальное сопровождение сделки и прозрачное ценообразование.</h5>
                </div>
                <CardsCars data={data}/>
            </div>
        </>
    );
}




