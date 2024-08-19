import s from './burgerMenu.module.scss'

type Props = {
    onClick?: () => void;
    isNavModalOpen: boolean;
}

export const BurgerMenu = ({onClick, isNavModalOpen}: Props) => {
    return (
        <button className={`${s.button_menu} ${isNavModalOpen ? s.open : ''}`} onClick={onClick}>
            <span></span>
        </button>
    );
}

   