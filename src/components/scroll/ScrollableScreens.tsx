import React, { useEffect, useState } from 'react';
import { CarBox } from '../car-box/car-box';
import { Header } from '../header/header';
import { Home } from '../home-page/home-page';
import { LoginBox } from '../modal/login-box';
import { Modal } from '../modal/modal';
import './ScrollableScreens.css';
import Calculator from '../calc/calculator';

const ScrollableSections: React.FC = () => {
    const [activeScreen, setActiveScreen] = useState<number>(0);
    const [scrollEnabled, setScrollEnabled] = useState<boolean>(true);

    useEffect(() => {
        const handleWheel = (event: WheelEvent) => {
            if (!scrollEnabled) return; // Если прокрутка отключена, ничего не делаем

            // Если колесико вниз, переключаемся на следующий экран
            if (event.deltaY > 0 && activeScreen < 2) {
                setActiveScreen((prevScreen) => prevScreen + 1);
            }
            // Если колесико вверх, переключаемся на предыдущий экран
            else if (event.deltaY < 0 && activeScreen > 0) {
                setActiveScreen((prevScreen) => prevScreen - 1);
            }

            // Отключаем прокрутку на 2 секунды
            setScrollEnabled(false);
            setTimeout(() => {
                setScrollEnabled(true);
            }, 800);
        };

        window.addEventListener('wheel', handleWheel);
        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [scrollEnabled, activeScreen]);

    return (
        <>
            <Modal />
            <LoginBox />
            <div className="roud"></div>
            <Header />
            <div className="scrollable-screens-container">
                <div className={`screen ${activeScreen === 0 ? 'active' : ''}`} >
                    <Home />
                </div>
                <div className={`screen ${activeScreen === 1 ? 'active' : ''}`}  >
                    <CarBox />
                </div>
                <div className={`screen ${activeScreen === 2 ? 'active' : ''}`}  >
                    <Calculator/>
                </div>
            </div>
            {/* Панель навигации */}
            <div className="navigation-panel">
                <button className={`${activeScreen === 0 ? 'active' : ''}`} onClick={() => setActiveScreen(0)}>Экран 1</button>
                <button className={`${activeScreen === 1 ? 'active' : ''}`} onClick={() => setActiveScreen(1)}>Экран 2</button>
                <button className={`${activeScreen === 2 ? 'active' : ''}`} onClick={() => setActiveScreen(2)}>Экран 3</button>
                {/* Добавьте другие кнопки для остальных экранов */}
            </div>
        </>
    );
};


export default ScrollableSections;
