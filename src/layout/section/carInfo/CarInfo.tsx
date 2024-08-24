import React, {useState, useEffect, useRef} from "react";
import s from "./carInfo.module.scss";
import {Image} from "../../../components/image";

export const CarInfo = () => {
    const [activeInfo, setActiveInfo] = useState<number | null>(null);
    const infoRef = useRef<HTMLDivElement | null>(null);
    const buttonsRef = useRef<HTMLDivElement | null>(null);

    const handleButtonClick = (index: number) => {
        if (activeInfo === index) {
            setActiveInfo(null);
        } else {
            setActiveInfo(index);
        }
    };

    const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Node;
        if (
            infoRef.current && !infoRef.current.contains(target) &&
            buttonsRef.current && !buttonsRef.current.contains(target)
        ) {
            setActiveInfo(null);
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
                    <Image className={s.car_img} src="/img/car_info.png" alt="Информация о машине"/>
                    <div ref={buttonsRef} className={s.buttons}>
                        {[1, 2, 3, 4].map((_, index) => (
                            <button
                                key={index}
                                className={s.circle_button}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleButtonClick(index);
                                }}
                                style={{top: `${20 + index * 60}px`, left: `${20 + index * 60}px`}}
                            />
                        ))}
                    </div>
                </div>
                {activeInfo !== null && (
                    <div ref={infoRef} className={s.info_block}
                         style={{top: `${20 + activeInfo * 5}px`, left: `${100}px`}}>
                        <p>{`Информация о блоке ${activeInfo + 1}`}</p>
                    </div>
                )}
            </div>
        </>
    );
};
