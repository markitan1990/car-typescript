import React, { useRef } from 'react';
import { NewTestDataType } from "../../../consts/types";
import { Image } from "../../../components";

import s from "./index.module.scss";
import Slider from "react-slick";

interface PropsType {
    car: NewTestDataType
}

export function CarSlider({ car }: Readonly<PropsType>) {
    const mainSliderRef = useRef<Slider>(null); // Реф для главного слайдера

    // Настройки для основного слайдера
    const mainSliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true, // Отключаем стандартные стрелки
        fade: false,
    };

    // Обработчик клика по миниатюре
    const handleThumbnailClick = (index: number) => {
        if (mainSliderRef.current) {
            mainSliderRef.current.slickGoTo(index);
        }
    };

    // Функции для переключения слайдов
    const nextSlide = () => {
        console.log(mainSliderRef.current)
        if (mainSliderRef.current) {
            mainSliderRef.current.slickNext();
        }
    };

    const prevSlide = () => {
        if (mainSliderRef.current) {
            mainSliderRef.current.slickPrev();
        }
    };

    return (
        <div className={s.carPage}>
            <Slider {...mainSliderSettings} ref={mainSliderRef}>
                {car?.images?.map((image, index) => {
                    return (
                        <div key={index}>
                            <Image
                                className={s.img}
                                src={`/img/car-data/${car?.name}/${image.link}`}
                                alt={`photo-${index}`}
                            />
                        </div>
                    );
                })}
            </Slider>
            <div className={s.controls}>
                <button onClick={prevSlide} className={s.arrow}>◀</button>
                <button onClick={nextSlide} className={s.arrow}>▶</button>
            </div>
            <div className={s.thumbnails}>
                {car?.images?.map((image, index) => {
                    const thumbSrc = `/img/car-data/${car?.name}/${image.link}`;
                    return (
                        <img
                            key={index}
                            className={s.thumbnail}
                            src={thumbSrc}
                            alt={`thumbnail-${index}`}
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleThumbnailClick(index)}
                        />
                    );
                })}
            </div>
        </div>
    );
}
