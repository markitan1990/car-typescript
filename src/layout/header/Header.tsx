import s from './header.module.scss'
import React, {useState, useEffect} from 'react';
import {Navigate} from "./navigate";
import {ContactUs} from "./contactUs";
import {FeedbackForm} from "../../components/feedbackForm";
import {Modal} from "../../components/modal";
import {Logo} from "../../components/logo";

export const Header = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);

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
            <header className={`${s.header} ${scrolled ? s.scrolled : ''}`}>
                <Modal isOpen={isContactModalOpen} onClick={() => setIsContactModalOpen(false)}/>
                <FeedbackForm isOpen={isContactModalOpen}/>
                <div className={s.logo_nav}>
                    <Logo/>
                    <Navigate/>
                </div>
                <ContactUs setIsContactModalOpen={() => setIsContactModalOpen(true)}/>
            </header>
        </>
    );
}





