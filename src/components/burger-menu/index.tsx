import { clsx } from 'clsx'
import s from './index.module.scss'

interface BurgerMenu {
  onClick?: () => void
  isNavModalOpen: boolean
}

export function BurgerMenu({ onClick, isNavModalOpen }: Readonly<BurgerMenu>) {
  return (
    <button className={clsx(s.button_menu, isNavModalOpen && s.open)} onClick={onClick}>
      <span></span>
    </button>
  )
}
