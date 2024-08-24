import {CarBox} from "./layout/section/carBox";
import {Header} from "./layout/header";
import {AboutUs} from './layout/section/aboutUs';
import {Home} from "./layout/section/home";
import {Services} from "./layout/section/services";
import './styles/globalStyles.scss'
import {GoTopButton} from "./components/goTopButton";
import {CarInfo} from "./layout/section/carInfo";

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

