import s from './header.module.scss';
import React, {useState, useEffect, useCallback, useMemo} from 'react';
import { Navigate } from "./navigate";
import { ContactUs } from "./contactUs";
import { FeedbackForm } from "../../components/feedbackForm";
import { Modal } from "../../components/modal";
import { Logo } from "../../components/logo";
import { useWindowSize } from "react-use";
import { NavigateMobile } from "./navigate/NavigateMobile";
import { BurgerMenu } from "../../components/burgerMenu";

export const Header = () => {
    const { width } = useWindowSize();
    const [scrolled, setScrolled] = useState(false);
    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const [isNavModalOpen, setIsNavModalOpen] = useState(false);

    const toggleScroll = useCallback(() => {
        setScrolled(window.scrollY > 80);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', toggleScroll);
        return () => window.removeEventListener('scroll', toggleScroll);
    }, [toggleScroll]);

    const openFormModal = () => {
        isNavModalOpen && setIsNavModalOpen(false)
        setIsFormModalOpen(true);
    }
    const closeFormModal = () => setIsFormModalOpen(false);
    const openNavModal = () => setIsNavModalOpen(prev => !prev);
    const closeNavModal = () => setIsNavModalOpen(false);

    const isMobile = useMemo(() => width < 1500, [width]);

    return (
        <>
            <header className={`${s.header} ${scrolled ? s.scrolled : ''}`}>
                <Modal isOpen={isFormModalOpen} onClick={closeFormModal}>
                    <FeedbackForm isOpen={isFormModalOpen} />
                </Modal>
                    {isMobile ? (
                        <div className={s.logo_nav}>
                            <Logo />
                            <BurgerMenu isNavModalOpen={isNavModalOpen} onClick={openNavModal}/>
                            {isNavModalOpen && (
                                <Modal isOpen={isNavModalOpen} onClick={closeNavModal}>
                                    <NavigateMobile />
                                    <span></span>
                                    <ContactUs onClick={openFormModal} className={s.contact_us_mobile}/>
                                </Modal>
                            )}
                        </div>
                    ) : (
                        <>
                        <div className={s.logo_nav}>
                            <Logo />
                            <Navigate/>
                        </div>
                        <ContactUs onClick={openFormModal}/>
                        </>
                    )}
            </header>
        </>
    );
};
