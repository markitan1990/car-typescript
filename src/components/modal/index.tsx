import {ReactNode} from 'react';
import clsx from "clsx";

import s from "./index.module.scss";

interface ModalProps {
    children: ReactNode;
    isOpen: boolean;
    onClick?: () => void;
}

export function Modal ({children, isOpen, onClick}: Readonly<ModalProps>) {
    return (
        <button className={clsx(s.modal, isOpen && s.active)} onClick={onClick}>
        {children}
        </button>
);
}
