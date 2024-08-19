import s from './button.module.scss'
import clsx from "clsx";


type Props = {
    value: string;
    className?: string;
    onClick?: () => void;
    type?: 'submit';
    fullWidth?: boolean;
    variant?: 'link' | 'primary' | 'primary2' | 'pure' | 'active' ;
}

export const Button = ({value, className, onClick, type, variant, fullWidth}: Props) => {
    const classNames = clsx(s.btn, variant && s[variant], fullWidth && s.fullWidth, className)

    return (
        <button className={classNames} onClick={onClick} type={type}>
            {value}
        </button>
    );
}

   