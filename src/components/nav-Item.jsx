import { Icon } from "./icono";
import "./NavItem.css";

export function NavItem(props){
    return <div className="Nav-Item">
        <Icon icono={props.icono}></Icon>
        {props.nombre}
    </div>
}