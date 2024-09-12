import {GoTopButton} from "../components";
import {AboutUs, Home, Services, CarBox, CarInfo, AboutServices, Contact} from "../layout";

import './../styles/globalStyles.scss'

export function HomePage() {
    return (
        <>
            <Home/>
            <AboutUs/>
            <Services/>
            <CarBox/>
            <CarInfo/>
            <AboutServices/>
            <Contact/>
            <GoTopButton/>
        </>
    );
}

