import { ToggleClassActive } from '../util';
import './button.css'

interface ButtonContactUsProps {
    value: string;
    className?: string;
  }
  
  export function ButtonContactUs({ value, className }: ButtonContactUsProps) {
    return (
      <button className={`btn-0 ${className}`} onClick={() => ToggleClassActive(["modal", "login-box"])}>
        {value}
      </button>
    );
  }

   