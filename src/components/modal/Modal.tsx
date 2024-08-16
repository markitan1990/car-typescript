import s from "./modal.module.scss";

type Props = {
    isOpen: boolean;
    onClick?: () => void;
}

export const Modal = ({ isOpen, onClick }: Props) =>{
    return <div className={`${s.modal} ${isOpen ? s.active : ''}`} onClick={onClick}></div>;
}