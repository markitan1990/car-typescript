import './header.css'
import { ButtonContactUs } from '../button/button'
import { Logo } from '../logo/logo'
import React, { useState, useEffect } from 'react';

 
function Question() {
    return <>
        <div className="question">
        <Image className="vectorphone" src='/img/Vectorphone.png' alt="Главная" />
            <div className="question-info">
                <p>Есть вопросы?</p>
                <a href="tel:+375291212117">+375 29 12 12 117</a>
            </div>
        </div>
    </>
}

function ContactUs() {
    return (
        <>
            <div className="contact_us">
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
    return <a href="http://localhost:3000/" className="btn-flip" data-back={value} data-front={value}>{value}</a>;
}

function Navigate() {
    return (
        <>
            <div className="navigate">
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
            <header className={`header ${scrolled ? 'scrolled' : ''}`}>
                <div className='logo-nav'>
                    <Logo />
                    <Navigate />
                </div>
                <ContactUs />
            </header>
        </>
    );
}