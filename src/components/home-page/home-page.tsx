import { Image } from "../header/header";
import './home-page.css'
import logo from "../../assets/static/logo.jpg"

export function Home() {
    return (
        <>
            <div className="home">
                <div>
                    <h2>Из Германии, из Америки, из Китая, но лучше из Германии, так гемора меньше!</h2>
                    <Image className="logo2" src={logo} alt="Главная" />
                    <h1>Привезем любой драндулет!</h1>
                    {/* <div className="bmw"></div>
                <div className="audi"></div> */}
                </div>
            </div>
        </>
    );
}