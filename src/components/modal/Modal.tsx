import {ReactNode} from 'react';
import s from "./modal.module.scss";

type Props = {
    children: ReactNode;
    isOpen: boolean;
    onClick?: () => void;
}

export const Modal = ({children, isOpen, onClick}: Props) => {
    return (
        <div className={`${s.modal} ${isOpen ? s.active : ''}`} onClick={onClick}>
            {children}
        </div>
    );
};
