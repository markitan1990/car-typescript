import { useState } from 'react';
import './header.css' 
import { ToggleClassActive } from '../util';
import logo from '../../assets/static/logo.jpg'
 
export function ButtonContactUs({value}:{value: string}){
    return <button className="glow-on-hover" type="button" onClick={ () => ToggleClassActive(["modal", "login-box"])}>{value}</button>
}

function ContactUs() { 
    return (
        <>
            <div className="contact_us">
               <ButtonContactUs value="Заказать звонок" />
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

function Logo() {
    return (
        <>
            <div className="logo" id="logo">
                <Image className='logo' src={logo} alt="Главная" />
            </div>
        </>
    );
}

function BtnFlip({ value }: { value: string }) {
    return <a href="#" className="btn-flip" data-back={value} data-front={value}></a>;
}

function Navigate() {
    return (
        <>
            <div className="navigate">
                <BtnFlip value="Преимущества" />
                <BtnFlip value="Услуги" />
                <BtnFlip value="Как заказать" />
                <BtnFlip value="О компании" />
                <BtnFlip value="Отзывы" />
                <BtnFlip value="Контакты" />
            </div>
        </>
    );
}

export function Header() {
    return (
        <>
            <header className="header">
                <Logo />
                <Navigate />
                <ContactUs />
            </header>
        </>
    );
}