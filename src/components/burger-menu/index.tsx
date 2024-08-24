import * as s from './index.module.scss'

interface BurgerMenu {
  onClick?: () => void
  isNavModalOpen: boolean
}

export function BurgerMenu({ onClick, isNavModalOpen }: BurgerMenu) {
  return (
    <button className={`${s.button_menu} ${isNavModalOpen ? s.open : ''}`} onClick={onClick}>
      <span></span>
    </button>
  )
}
