import { useState } from "react";
import './navItem.css';
import './Dropdown.css';
import { Icon } from "./icono";

export function Dropdown(){
    const [open, setOpen] = useState(false)

    return <div className="Nav-Item Dropdown" onClick={() => setOpen((open) => !open)}>
        <Icon icono={'menu'}></Icon>
        Mas
        {open ? <div className="Nav-Menu">Desplegable</div> : null }
    </div>
}