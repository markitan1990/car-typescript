import s from './button.module.scss'

interface ButtonContactUsProps {
    value: string;
    className?: string;
    onClickHandler?: () => void;
  }
  
  export function ButtonContactUs({ value, className, onClickHandler }: ButtonContactUsProps) {
    return (
      <button className={`${s.btn_0} ${className}`} onClick={onClickHandler}>
        {value}
      </button>
    );
  }

   