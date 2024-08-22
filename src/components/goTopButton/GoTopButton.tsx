import React, { useEffect, useState } from 'react';
import s from './goTopButton.module.scss'
import {Icon} from "../icon";

export const GoTopButton = () => {
  const [showBtn, setShowBtn] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setShowBtn(true)
    } else {
      setShowBtn(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [])

  return (
    <>
      {showBtn && (
        <button className={s.button}
                onClick={scrollToTop}
        >
          <Icon
            className={s.arrow}
            iconId={"arrow_top"}
            width={'40'}
            height={'40'}
            viewBox={'0 0 512 512'}
          />
        </button>
      )}
    </>
  )
}
