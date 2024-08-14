import s from './header.module.scss'
import { ButtonContactUs } from '../button/button'
import { Logo } from '../logo/logo'
import React, { useState, useEffect } from 'react';

 
function Question() {
    return <>
        <div className={s.question}>
        <Image className={s.vector_phone} src='/img/Vectorphone.png' alt="Главная" />
            <div className={s.question_info}>
                <p>Есть вопросы?</p>
                <a href="tel:+375291212117">+375 29 12 12 117</a>
            </div>
        </div>
    </>
}

function ContactUs() {
    return (
        <>
            <div className={s.contact_us}>
                <ButtonContactUs value="Связаться" />
                <Question/>
            </div>
        </>
    );
}

interface LogoProps {
    className: string,
    src: string;
    alt: string;
}

export function Image({ className, src, alt }: LogoProps) {
    return <img className={className} src={src} alt={alt} ></img>
}

function BtnFlip({ value }: { value: string }) {
    return <a href="http://localhost:3000/" className={s.btn_flip} data-back={value} data-front={value}>{value}</a>;
}

function Navigate() {
    return (
        <>
            <div className={s.navigate}>
                <BtnFlip value="Главная" />
                <BtnFlip value="Процесс покупки" />
                <BtnFlip value="Стоимость доставки" />
                <BtnFlip value="Авто" />
                <BtnFlip value="Полезная информация" />
            </div>
        </>
    );
}

export function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`${s.header} ${scrolled ? 'scrolled' : ''}`}>
                <div className={s.logo_nav}>
                    <Logo />
                    <Navigate />
                </div>
                <ContactUs />
            </header>
        </>
    );
}