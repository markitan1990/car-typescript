import React, {useRef} from 'react';
import {NewTestDataType} from "../../../consts/types";
import {Icon, Image} from "../../../components";
import Slider from "react-slick";

import s from "./index.module.scss";
import {clsx} from "clsx";
import {CarImageOptions} from "../car-image-options";

interface PropsType {
    car: NewTestDataType
}

export function CarSlider({car}: Readonly<PropsType>) {
    const mainSliderRef = useRef<Slider>(null);

    const mainSliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
    };

    const handleThumbnailClick = (index: number) => {
        if (mainSliderRef.current) {
            mainSliderRef.current.slickGoTo(index);
        }
    };

    const nextSlide = () => {
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
                {car?.images?.map((image) => {
                    return (
                        <div key={image.car_cards_id}>
                            <Image
                                className={s.img}
                                src={`/img/car-data/${car?.name}/${image.link}`}
                                alt={`photo-${image.car_cards_id}`}
                            />
                        </div>
                    );
                })}
            </Slider>
            <div className={s.controls}>
                <button onClick={prevSlide} className={clsx(s.arrow, s.arrow_left)}>
                    <Icon iconId="arrow_left" viewBox={"0 0 9 17"} width={"9"} height={"17"}/>
                </button>
                <button onClick={nextSlide} className={clsx(s.arrow, s.arrow_right)}>
                    <Icon iconId="arrow_right" viewBox={"0 0 9 17"} width={"9"} height={"17"}/>
                </button>
            </div>
            <div className={s.thumbnails}>
                {car?.images?.map((image, index) => {
                    const thumbSrc = `/img/car-data/${car?.name}/${image.link}`;
                    return (
                        <div key={image.car_cards_id}>
                            <Image
                                className={s.thumbnail}
                                src={thumbSrc}
                                alt={`thumbnail-${index}`}
                                onClick={() => handleThumbnailClick(index)}
                            />
                        </div>
                    );
                })}
            </div>
            <CarImageOptions/>
        </div>
    );
}