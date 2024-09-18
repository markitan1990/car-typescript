import {GoTopButton} from "../../components";
import { useParams } from 'react-router-dom';
import {newTestData} from "../../consts";
import React from "react";
import {CarBox, Contact} from "../home-page/sections";
import {CarSlider} from "./car-slider";

import '../../styles/globalStyles.scss'

export function InfoPage() {
    const { id } = useParams();

    const car = newTestData.find(i => i.id === Number(id));


    return (
        <>
            {car && <CarSlider car={car}/>}
            {/*<CarBox/>*/}
            {/*<Contact/>*/}
            {/*<GoTopButton/>*/}
        </>
    );
}

