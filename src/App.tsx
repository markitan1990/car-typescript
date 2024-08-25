import {CarBox, Header, AboutUs, Services, Home, CarInfo} from "./layout";
import {GoTopButton} from "./components";

import './styles/globalStyles.scss'

export function App() {
    return (
        <>
            <Header/>
            <Home/>
            <AboutUs/>
            <Services/>
            <CarBox/>
            <CarInfo/>
            <GoTopButton/>
        </>
    );
}

