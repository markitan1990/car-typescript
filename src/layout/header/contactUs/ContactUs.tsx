import React from "react";
import {Button} from "../../../components/button";
import {Question} from "../question";
import s from '../header.module.scss'

type Props ={
    onClick: () => void;
    className?: string;
    closeNavModal?: () => void;
}
export const ContactUs = ({onClick, className}: Props) => {
    return (
        <>
            <div className={`${s.contact_us} ${className}`}>
                <Button value="Связаться" onClick={onClick} />
                <Question/>
            </div>
        </>
    );
}