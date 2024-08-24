import React, {useState, useEffect, useRef, useMemo} from "react";
import s from "./carInfo.module.scss";
import { Image } from "../../../components/image";
import {useWindowSize} from "react-use";
import {infoData} from "../../../common/consts/consts";

export const CarInfo = () => {
    const {width} = useWindowSize();
    const isMobile = useMemo(() => width <= 580, [width]);
    const [activeInfo, setActiveInfo] = useState<number | null>(null);
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
        if (buttonsRef.current && buttonsRef.current.contains(target)) {
            return;
        }
        setActiveInfo(null);
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const getButtonPosition = (className: string) => {
        const buttonElement = document.querySelector(`.${s[className]}`);
        if (buttonElement && buttonsRef.current) {
            const buttonRect = buttonElement.getBoundingClientRect();
            const buttonsRect = buttonsRef.current.getBoundingClientRect();

            return {
                top: buttonRect.bottom - buttonsRect.top + 5,
                left: buttonRect.left - buttonsRect.left + buttonRect.width / 2 - (isMobile ? 60 : 145),
            };
        }
        return { top: 0, left: 0 };
    };

    return (
        <div className={s.car_info}>
            <div className={s.car_info_text}>
                <h4>Посмотрите наши автомобили в наличии</h4>
                <h3>Лучшие Автомобили На Рынке</h3>
                <h5>Мы предоставляем не только всю необходимую информацию о ходе транспортировки авто к месту
                    назначения, но и полное документальное сопровождение сделки и прозрачное ценообразование.
                </h5>
            </div>
            <div className={s.image_wrapper}>
                <Image className={s.car_img} src="/img/car_info.png" alt="Информация о машине" />
                <div ref={buttonsRef} className={s.buttons}>
                    {infoData.map((info, index) => (
                        <div key={info.id}>
                            <button
                                className={`${s.button} ${s[info.className]} ${activeInfo === index ? s.active : ''}`}
                                onClick={() => handleButtonClick(index)}
                            />
                        </div>
                    ))}
                    {activeInfo !== null && (
                        <div
                            className={s.info_block}
                            style={getButtonPosition(infoData[activeInfo].className)}
                        >
                            <h5>{infoData[activeInfo].title}</h5>
                            <p>{infoData[activeInfo].description}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
