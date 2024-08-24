import { BurgerMenu, FeedbackForm } from 'components'
import { Logo } from 'components/logo'
import { Modal } from 'components/modal'
import { MouseEvent, useCallback, useEffect, useMemo, useState } from 'react'
import { useWindowSize } from 'react-use'
import { ContactUs } from './contactUs'
import { Navigate } from './navigate'
import { NavigateMobile } from './navigate/NavigateMobile'

import s from './header.module.scss'

export const Header = () => {
  const { width } = useWindowSize()
  const [scrolled, setScrolled] = useState(false)
  const [isFormModalOpen, setIsFormModalOpen] = useState(false)
  const [isNavModalOpen, setIsNavModalOpen] = useState(false)

  const toggleScroll = useCallback(() => {
    setScrolled(window.scrollY > 80)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', toggleScroll)
    return () => window.removeEventListener('scroll', toggleScroll)
  }, [toggleScroll])

  const openFormModal = () => {
    isNavModalOpen && setIsNavModalOpen(false)
    setIsFormModalOpen(true)
  }
  const closeFormModal = () => setIsFormModalOpen(false)
  const openNavModal = () => setIsNavModalOpen(prev => !prev)
  const closeNavModal = () => setIsNavModalOpen(false)

  const handleContentClick = (e: MouseEvent) => {
    e.stopPropagation()
  }

  const isMobile = useMemo(() => width < 1200, [width])

  return (
    <header className={`${s.header} ${scrolled ? s.scrolled : ''}`}>
      <Modal isOpen={isFormModalOpen} onClick={closeFormModal}>
        <FeedbackForm
          isOpen={isFormModalOpen}
          handleContentClick={handleContentClick}
          closeFormModal={closeFormModal}
        />
      </Modal>
      {isMobile ? (
        <div className={s.logo_nav}>
          <Logo />
          <BurgerMenu isNavModalOpen={isNavModalOpen} onClick={openNavModal} />
          <Modal isOpen={isNavModalOpen} onClick={closeNavModal}>
            <NavigateMobile />
            <span className={s.line}></span>
            <ContactUs onClick={openFormModal} className={s.contact_us_mobile} />
          </Modal>
        </div>
      ) : (
        <>
          <div className={s.logo_nav}>
            <Logo />
            <Navigate />
          </div>
          <ContactUs onClick={openFormModal} />
        </>
      )}
    </header>
  )
}
