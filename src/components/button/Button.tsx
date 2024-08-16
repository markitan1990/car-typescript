import s from './button.module.scss'

type Props = {
    value: string;
    className?: string;
    onClickHandler?: () => void;
}

export const Button = ({value, className, onClickHandler}: Props) => {
    return (
        <button className={`${s.btn_0} ${className}`} onClick={onClickHandler}>
            {value}
        </button>
    );
}

   