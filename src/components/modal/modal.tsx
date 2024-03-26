import { ToggleClassActive } from "../util";

export function Modal(){
    return <div className="modal"  onClick={ () => ToggleClassActive(["modal", "login-box"])}></div>;
}