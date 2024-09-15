import React from 'react'
import { Link } from 'react-scroll'

import s from './../index.module.scss'

interface ButtonFlipProps {
  value: string,
  path: string,
}

export function ButtonFlip({ value, path }: Readonly<ButtonFlipProps>) {

  return (
      <Link
        className={s.btn_flip}
        activeClass={s.active}
        to={path}
        spy={true}
        smooth={true}
        offset={path !== 'home' ? -80 : 0}
        duration={300}
      >{value}</Link>
  )
}