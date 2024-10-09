import React, {useEffect, useState} from 'react';
import {Icon} from "../icon";

import s from './index.module.scss'

export function GoTopButton() {
    const [showBtn, setShowBtn] = useState(false)
    const [bottom, setBottom] = useState(0)

    const handleScroll = () => {
        toggleVisibility()
        avoidFooter()
    };

    const toggleVisibility = () => {
        if (window.scrollY > 200) {
            setShowBtn(true)
        } else {
            setShowBtn(false)
        }
    };

    const avoidFooter = () => {
        const scrollHeight = document.documentElement.scrollHeight
        const scrollY = window.scrollY
        const clientHeight = document.documentElement.clientHeight
        const marginBottom = 10
        const footerHeight = 122

        const fromBottomSide = scrollHeight - scrollY - clientHeight

        if (fromBottomSide < footerHeight) {
            setBottom(marginBottom + footerHeight - fromBottomSide)
        } else {
            setBottom(marginBottom)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <>
            {showBtn && (
                <button className={s.button}
                        style={{bottom: bottom + 'px'}}
                        onClick={scrollToTop}
                >
                    <Icon
                        className={s.arrow}
                        iconId={"arrow_top"}
                        width={'77'}
                        height={'77'}
                        viewBox={'0 0 77 77'}
                    />
                </button>
            )}
        </>
    )
}
