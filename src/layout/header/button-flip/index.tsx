import React, {useEffect} from 'react';
import {Link as ScrollLink, scroller} from 'react-scroll'; // Переименуем Link из react-scroll
import {Link as RouterLink, useLocation} from 'react-router-dom'; // Переименуем Link из react-router-dom
import s from './../index.module.scss';

interface ButtonFlipProps {
    value: string;
    path: string;
    onClick?: () => void;
}

export function ButtonFlip({value, path, onClick}: Readonly<ButtonFlipProps>) {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            // Извлекаем id секции из хеша URL
            const sectionId = location.hash.replace('#', '');

            // Используем scroller для плавного скроллинга к нужной секции
            scroller.scrollTo(sectionId, {
                smooth: true,
                offset: -80,
                duration: 500,
            });
        }
    }, [location.hash]);

    // Если находимся на странице "Home", использовать ScrollLink, иначе RouterLink
    const isHomePage = location.pathname === '/home';

    return isHomePage ? (
        <ScrollLink
            className={s.btn_flip}
            activeClass={s.active}
            to={path}
            spy={true}
            offset={-80}
            duration={500}
            onClick={onClick}
        >
            {value}
        </ScrollLink>
    ) : (
        <RouterLink
            className={s.btn_flip}
            to={`/home#${path}`} // Переходим на страницу info с hash для якорного скроллинга
            onClick={onClick}
        >
            {value}
        </RouterLink>
    );
}
