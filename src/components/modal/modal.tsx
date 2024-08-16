import s from "./login-box.module.scss";

interface ModalProps {
    isOpen: boolean;
    onClick?: () => void;
}

export function Modal({ isOpen, onClick }: ModalProps){
    return <div className={`${s.modal} ${isOpen ? s.active : ''}`} onClick={onClick}></div>;
}