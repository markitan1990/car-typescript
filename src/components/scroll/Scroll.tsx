import React, { useEffect, useState } from 'react';
import {CarBox} from "../../layout/section/carBox";
import {Home} from "../../layout/section/home";
import { AboutUs } from '../../layout/section/aboutUs';
import { VideoPlayer } from '../util/video-player';
import {Header} from "../../layout/header";
import {Calculator} from "../calculator";
import s from './scroll.module.css';

export const Scroll: React.FC = () => {
    const [activeScreen, setActiveScreen] = useState<number>(0);
    const [scrollEnabled, setScrollEnabled] = useState<boolean>(true);

    const handleWheel = (event: WheelEvent) => {
        if (!scrollEnabled) return;
        if (event.deltaY > 0 && activeScreen < 3) {
            setActiveScreen((prevScreen) => prevScreen + 1);
        } else if (event.deltaY < 0 && activeScreen > 0) {
            setActiveScreen((prevScreen) => prevScreen - 1);
        }
        setScrollEnabled(false);
        setTimeout(() => {
            setScrollEnabled(true);
        }, 1000);
    };

    useEffect(() => {
        window.addEventListener('wheel', handleWheel);
        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [scrollEnabled, activeScreen]);

    return (
        <>
            {/*<Modal />*/}
            {/*<LoginBox />*/}
            <Header />
            <div className={s.scrollable_screens_container}>
                <div className={`${s.screen} ${activeScreen === 0 ? s.active : ''}`} >
                    <div className={s.roud}>
                        <VideoPlayer src="./video/v1.mp4" startTime={0} endTime={2.1} index={0} activeScreen={activeScreen} />
                    </div>
                    <Home />
                </div>
                <div className={`${s.screen} ${activeScreen === 1 ? s.active : ''}`} >
                    <div className={s.roud}>
                        <VideoPlayer src="./video/v2.mp4" startTime={0} endTime={2.1} index={1} activeScreen={activeScreen} />
                    </div>
                    <CarBox />
                </div>
                <div className={`${s.screen} ${activeScreen === 2 ? s.active : ''}`} >
                    <div className={s.roud}>
                        <VideoPlayer src="./video/v5.mp4" startTime={0} endTime={2.1} index={2} activeScreen={activeScreen} />
                    </div>
                    <Calculator />
                </div>
                <div className={`${s.screen} ${activeScreen === 3 ? s.active : ''}`} >
                    <div className={s.roud}>
                        <VideoPlayer src="./video/v4.mp4" startTime={0} endTime={2.1} index={3} activeScreen={activeScreen} />
                    </div>
                    <AboutUs />
                </div>
            </div>
            <div className={s.navigation_panel}>
                <button className={`${activeScreen === 0 ? s.active : ''}`} onClick={() => setActiveScreen(0)}>Главная</button>
                <button className={`${activeScreen === 1 ? s.active : ''}`} onClick={() => setActiveScreen(1)}>Автомобили</button>
                <button className={`${activeScreen === 2 ? s.active : ''}`} onClick={() => setActiveScreen(2)}>Калькулятор</button>
                <button className={`${activeScreen === 3 ? s.active : ''}`} onClick={() => setActiveScreen(3)}>О нас</button>
            </div>
        </>
    );
};
