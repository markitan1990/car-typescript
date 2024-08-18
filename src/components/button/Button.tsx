import s from './button.module.scss'

type Props = {
    value: string;
    className?: string;
    onClick?: () => void;
}

export const Button = ({value, className, onClick}: Props) => {
    return (
        <button className={`${s.btn_0} ${className}`} onClick={onClick}>
            {value}
        </button>
    );
}

   