import { ToggleClassActive } from '../util';
import './button.css'

interface ButtonContactUsProps {
    value: string;
    className?: string;
  }
  
  export function ButtonContactUs({ value, className }: ButtonContactUsProps) {
    return (
      <a className={`btn-0 ${className}`} href="#" onClick={() => ToggleClassActive(["modal", "login-box"])}>
        {value}
      </a>
    );
  }
