import { Image } from "../header/header";
import s from "./about-us.module.scss"

function SvgCheck() {
    return <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_48_299)">
            <path d="M15.75 2.9062C15.75 3.1562 15.6567 3.3687 15.47 3.5437L8.23 10.3312L6.87 11.6062C6.68333 11.7812 6.45667 11.8687 6.19 11.8687C5.92333 11.8687 5.69667 11.7812 5.51 11.6062L4.15 10.3312L0.53 6.93745C0.343333 6.76245 0.25 6.54995 0.25 6.29995C0.25 6.04995 0.343333 5.83745 0.53 5.66245L1.89 4.38745C2.07667 4.21245 2.30333 4.12495 2.57 4.12495C2.83667 4.12495 3.06333 4.21245 3.25 4.38745L6.19 7.15308L12.75 0.993701C12.9367 0.818701 13.1633 0.731201 13.43 0.731201C13.6967 0.731201 13.9233 0.818701 14.11 0.993701L15.47 2.2687C15.6567 2.4437 15.75 2.6562 15.75 2.9062Z" fill="#2661E9" />
        </g>
        <defs>
            <clipPath id="clip0_48_299">
                <rect width="16" height="12" fill="white" />
            </clipPath>
        </defs>
    </svg>
}

function AboutUsImg() {
    return (
        <div className={s.pictures_about}>
            <Image className={s.about_us_img1} src="/img/image1.png" alt="Главная" />
            <Image className={s.about_us_img2} src="/img/image.png" alt="Главная" />
        </div>
    );
}

function BlueText() {
    return (
        <div className={s.blue_text}>
            <p>Добро пожаловать в DRIVE HUB</p>
            <div></div>
        </div>
    );
}

function AboutUsText() {
    return (
        <>
            <BlueText />
            <h3>Мы Известны Своим Сервисом</h3>
            <div className={s.block_about}>
                <div>
                    <h4>Drive Hub - это самая привлекательная, креативная, современная компания премиум-класса автодилеров. </h4>
                    <ul>
                        <li><span><SvgCheck/></span>В каком техническом обслуживании нуждается автомобиль?</li>
                        <li><span><SvgCheck/></span>Система контроля доступа зарядила электромобиль.</li>
                        <li><span><SvgCheck/></span>Система контроля доступа заряда.</li>
                        <li><span><SvgCheck/></span>Система контроля доступа заряда электромобиля.</li>
                        <li><span><SvgCheck/></span>Система контроля доступа заряда электро.</li>
                    </ul>
                </div>
            </div>
        </>

    );
}

export function AboutUs() {
    return (
        <div className={s.about_us}>
            <AboutUsImg />
            <div className={s.text_info}>
                <AboutUsText />
            </div>
        </div>
    );
}