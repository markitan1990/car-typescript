import React, { useRef, useEffect, useState } from 'react';
import { CarBox } from '../car-box/car-box';
import { Header } from '../header/header';
import { Home } from '../home-page/home-page';
import { LoginBox } from '../modal/login-box';
import { Modal } from '../modal/modal';
import './scroll.css';
import Calculator from '../calc/calculator';
import { AboutUs } from '../about-us/about-us';

interface VideoDurations {
    [key: number]: number;
}

const Scroll: React.FC = () => {
    const forwardVideoRef = useRef<HTMLVideoElement>(null);
    const backwardVideoRef = useRef<HTMLVideoElement>(null);
    const [activeScreen, setActiveScreen] = useState<number>(0);
    const [isPlayingBackward, setIsPlayingBackward] = useState<boolean>(false);
    const [scrollEnabled, setScrollEnabled] = useState<boolean>(true);
    const [videoDurations, setVideoDurations] = useState<VideoDurations>({ 0: 2, 1: 2, 2: 2, 3: 1 });

    // const playVideoForTime = async (videoRef: React.RefObject<HTMLVideoElement>, time: number) => {
    //     if (videoRef.current) {
    //         videoRef.current.play();
    //         setTimeout(() => {
    //             videoRef.current?.pause();
    //         }, time * 1000);
    //     }
    // };
    let a = 0;
    const handleWheel = (event: WheelEvent) => {
        // if (!scrollEnabled) return;
        // console.log( event.deltaY, activeScreen );
        a = a+1;
        // if (event.deltaY > 0) {
        //     setIsPlayingBackward(false);
        //     setActiveScreen(activeScreen >= 3 ? 3 : activeScreen + 1);
        // } else if (event.deltaY < 0) {
        //     setIsPlayingBackward(true);
        //     setActiveScreen(activeScreen <= 0  ? 0 : activeScreen - 1);
        // }
        // setScrollEnabled(false);
        // setTimeout(() => {
        //     setScrollEnabled(true);
        // }, 1000);
    };
    console.log(a);
    // useEffect(() => {
    //     const duration = videoDurations[activeScreen] ?? 2;
    //     if (isPlayingBackward) {
    //         playVideoForTime(backwardVideoRef, duration);
    //     } else {
    //         playVideoForTime(forwardVideoRef, duration);
    //     }
    // }, [activeScreen, isPlayingBackward, videoDurations]);

    // useEffect(() => {
    //     if (!scrollEnabled) {
    //         setTimeout(() => {
    //             setScrollEnabled(true);
    //         }, 1000);
    //     }
    // }, [scrollEnabled]);

    useEffect(() => {
        window.addEventListener('wheel', handleWheel);
        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return (
        <>
            <Modal />
            <LoginBox />
            <div className="roud">
                <video ref={forwardVideoRef} muted loop style={{ display: isPlayingBackward ? 'none' : 'block' }}>
                    <source src="./video/video1.mp4" type="video/mp4" />
                </video>
                <video ref={backwardVideoRef} muted loop style={{ display: isPlayingBackward ? 'block' : 'none' }}>
                    <source src="./video/video2.mp4" type="video/mp4" />
                </video>
            </div>
            <Header />
            <div className="scrollable-screens-container">
                <div className={`screen ${activeScreen === 0 ? 'active' : ''}`} >
                    <Home />
                </div>
                <div className={`screen ${activeScreen === 1 ? 'active' : ''}`} >
                    <CarBox />
                </div>
                <div className={`screen ${activeScreen === 2 ? 'active' : ''}`} >
                    <Calculator />
                </div>
                <div className={`screen ${activeScreen === 3 ? 'active' : ''}`} >
                    <AboutUs />
                </div>
            </div>
            <div className="navigation-panel">
                <button className={`${activeScreen === 0 ? 'active' : ''}`} onClick={() => setActiveScreen(0)}>Экран 1</button>
                <button className={`${activeScreen === 1 ? 'active' : ''}`} onClick={() => setActiveScreen(1)}>Экран 2</button>
                <button className={`${activeScreen === 2 ? 'active' : ''}`} onClick={() => setActiveScreen(2)}>Экран 3</button>
                <button className={`${activeScreen === 3 ? 'active' : ''}`} onClick={() => setActiveScreen(3)}>Экран 4</button>
            </div>
        </>
    );
};


export default Scroll;
