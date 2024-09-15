import React from 'react'
import {Link} from 'react-scroll'

import s from './../index.module.scss'

interface ButtonFlipProps {
    value: string,
    path: string,
    onClick?: () => void,
}

export function ButtonFlip({value, path, onClick}: Readonly<ButtonFlipProps>) {

    return (
            <Link
                className={s.btn_flip}
                activeClass={s.active}
                to={path}
                spy={true}
                offset={path !== 'home' ? -80 : 0}
                duration={500}
                onClick={onClick}
            >{value}</Link>
    )
}