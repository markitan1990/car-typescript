import {CarBox, Header, AboutUs, Services, Home, CarInfo} from "./layout";
import {GoTopButton} from "./components";

import './styles/globalStyles.scss'
import {AboutServices} from "./layout/section/about-services";

export function App() {
    return (
        <>
            <Header/>
            <Home/>
            <AboutUs/>
            <Services/>
            <CarBox/>
            <CarInfo/>
            <AboutServices/>
            <GoTopButton/>
        </>
    );
}

