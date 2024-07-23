import React, { useRef, useEffect, useState } from 'react';
import { CarBox } from '../car-box/car-box';
import { Header } from '../header/header';
import { Home } from '../home-page/home-page';
import { LoginBox } from '../modal/login-box';
import { Modal } from '../modal/modal';
import './scroll.css';
import Calculator from '../calc/calculator';
import { AboutUs } from '../about-us/about-us';
import { VideoPlayer } from '../util/video-player';


const Scroll: React.FC = () => {
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
            <Modal />
            <LoginBox />
            <Header />
            {/* <div className="scrollable-screens-container">
                <div className={`screen ${activeScreen === 0 ? 'active' : ''}`} >
                    <div className="roud">
                        <VideoPlayer src="./video/v1.mp4" startTime={0} endTime={2.1} index={0} activeScreen={activeScreen} />
                    </div>
                    <Home />
                </div>
                <div className={`screen ${activeScreen === 1 ? 'active' : ''}`} >
                    <div className="roud">
                        <VideoPlayer src="./video/v2.mp4" startTime={0} endTime={2.1} index={1} activeScreen={activeScreen} />
                    </div>
                    <CarBox />
                </div>
                <div className={`screen ${activeScreen === 2 ? 'active' : ''}`} >
                    <div className="roud">
                        <VideoPlayer src="./video/v5.mp4" startTime={0} endTime={2.1} index={2} activeScreen={activeScreen} />
                    </div>
                    <Calculator /> 
                </div>
                <div className={`screen ${activeScreen === 3 ? 'active' : ''}`} >
                    <div className="roud">
                        <VideoPlayer src="./video/v4.mp4" startTime={0} endTime={2.1} index={3} activeScreen={activeScreen} />
                    </div>
                    <AboutUs />
                </div>
            </div>
            <div className="navigation-panel">
                <button className={`${activeScreen === 0 ? 'active' : ''}`} onClick={() => setActiveScreen(0)}>Главная</button>
                <button className={`${activeScreen === 1 ? 'active' : ''}`} onClick={() => setActiveScreen(1)}>Автомобили</button>
                <button className={`${activeScreen === 2 ? 'active' : ''}`} onClick={() => setActiveScreen(2)}>Калькулятор</button>
                <button className={`${activeScreen === 3 ? 'active' : ''}`} onClick={() => setActiveScreen(3)}>О нас</button>
            </div> */}
        </>
    );
};


export default Scroll;
