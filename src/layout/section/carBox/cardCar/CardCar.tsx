import React from "react";
import {CardType} from "../../../../common/consts/types";
import {Image} from "../../../../components/image";
import {Icon} from "../../../../components/icon";
import s from "../carBox.module.scss";

type Props = {
    data: CardType
}

export const CardCar = ({data}: Props) => {
    const carData = data.carCards

    const formatNumber = (number: number) => {
        return number.toLocaleString('en-US');
    };

    return (
        <>
            <div key={data.index} className={s.content2}>
                <div className={s.car_img_card}>
                    <Image className={carData.images[0].link.split(".")[0]}
                           src={`/img/${carData.images[0].link}`}
                           alt={carData.images[0].link.split(".")[0]}/>
                    <div className={`${s.condition} ${carData.car_condition === "НОВАЯ" ? s.new : s.pre_owned}`}>
                        {carData.car_condition}
                    </div>
                    <div className={s.engine}>{carData.car_engine} л</div>
                    <div className={s.cost}>$ {formatNumber(carData.cost)}</div>
                </div>
                <div className={s.info_box}>
                    <div className={s.brand_box}>
                        <div>
                            {carData.car_year + "  "}
                            {carData.brand.car_name}
                        </div>
                        <Image className={carData.brand.link.split(".")[0]}
                               src={`/img/brand/${carData.brand.link}`}
                               alt={carData.brand.link.split(".")[0]}/>
                    </div>
                    <div className={s.description}>
                        {carData.description}
                    </div>
                    <div className={s.space_line}></div>
                </div>
                <div className={s.data_box}>
                    <div>
                        <Icon iconId={'calendar'} height={'18'} width={'18'} viewBox={'0 0 18 18'}/>
                        {carData.car_year}
                    </div>
                    <div>
                        <Icon iconId={'gear'} height={'17'} width={'17'} viewBox={'0 0 17 17'}/>
                        {carData.transmission}
                    </div>
                    <div>
                        <Icon iconId={'speedometer'} height={'16'} width={'16'} viewBox={'0 0 16 16'}/>
                        {formatNumber(carData.car_mileage)}
                    </div>
                </div>
            </div>
        </>
    );
}