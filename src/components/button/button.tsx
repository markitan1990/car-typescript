import { ToggleClassActive } from '../util';
import s from './button.module.scss'

interface ButtonContactUsProps {
    value: string;
    className?: string;
  }
  
  export function ButtonContactUs({ value, className }: ButtonContactUsProps) {
    return (
      <button className={`${s.btn_0} ${className}`} onClick={() => ToggleClassActive(["modal", "login-box"])}>
        {value}
      </button>
    );
  }

   