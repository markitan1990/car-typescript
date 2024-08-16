import React from "react";
import {Button} from "../../../components/button";
import {Question} from "../question";
import s from '../header.module.scss'

type Props ={
    setIsContactModalOpen: () => void;
}
export const ContactUs = ({setIsContactModalOpen}: Props) => {
    return (
        <>
            <div className={s.contact_us}>
                <Button value="Связаться" onClickHandler={setIsContactModalOpen}/>
                <Question/>
            </div>
        </>
    );
}