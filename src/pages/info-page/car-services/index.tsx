import s from "./index.module.scss";
import {Icon} from "../../../components";
import React from "react";
import {carServicesData} from "../../../consts/consts";


export function CarServices() {

    return (
        <div className={s.car_services}>
            {carServicesData.map((service) => (
                <div key={service.id} className={s.car_service}>
                    {/*<Icon iconId={service.iconId} viewBox={"0 0 16 16"} width={"16"} height={"16"}/>*/}
                    <div className={s.car_service_text}>
                        <h3>{service.value}</h3>
                        <h5>{service.description}</h5>
                    </div>
                </div>
            ))}
        </div>
    );
}