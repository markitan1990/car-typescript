import {CarBox, Header, AboutUs, Services, Home, CarInfo, AboutServices, Contact, Footer} from "./layout";
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
            <AboutServices/>
            <Contact/>
            <GoTopButton/>
            <Footer/>
        </>
    );
}

