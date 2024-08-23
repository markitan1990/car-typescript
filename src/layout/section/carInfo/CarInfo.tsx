import React, { useState, useEffect, useRef } from "react";
import s from "./carInfo.module.scss";
import { Image } from "../../../components/image";


export const CarInfo = () => {
    const [activeInfo, setActiveInfo] = useState<number | null>(null);
    const infoRef = useRef<HTMLDivElement | null>(null);

    const handleButtonClick = (index: number) => {
        // Переключение состояния при нажатии на кнопку
        if (activeInfo === index) {
            setActiveInfo(null); // Закрываем блок, если нажата та же кнопка
        } else {
            setActiveInfo(index); // Открываем блок с новой информацией
        }
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (infoRef.current && !infoRef.current.contains(event.target as Node)) {
            setActiveInfo(null); // Закрываем блок, если клик вне блока
        }
    };

    useEffect(() => {
        if (activeInfo !== null) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [activeInfo]);

    return (
        <>
            <div className={s.car_info}>
                <div className={s.car_info_text}>
                    <h4>Посмотрите наши автомобили в наличии</h4>
                    <h3>Лучшие Автомобили На Рынке</h3>
                    <h5>Мы предоставляем не только всю необходимую информацию о ходе транспортировки авто к месту
                        назначения, но и полное документальное сопровождение сделки и прозрачное ценообразование.</h5>
                </div>
                <div className={s.image_wrapper}>
                    <Image className={s.car_img} src="/img/car_info.png" alt="Информация о машине" />
                    <div className={s.buttons}>
                        {[1, 2, 3, 4].map((_, index) => (
                            <button
                                key={index}
                                className={s.circle_button}
                                onClick={(e) => {
                                    e.stopPropagation(); // Остановка распространения события
                                    handleButtonClick(index);
                                }}
                                style={{ top: `${20 + index * 60}px`, left: `${20 + index * 60}px` }} // adjust positioning as needed
                            />
                        ))}
                    </div>
                </div>
                {activeInfo !== null && (
                    <div ref={infoRef} className={s.info_block}>
                            <p>{`Информация о блоке ${activeInfo + 1}`}</p>
                    </div>
                )}
            </div>
        </>
    );
};
