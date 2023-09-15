import { useState } from "react";

export function Dropdown(){
    const [open, setOpen] = useState(false)

    return <div onClick={() => setOpen((open) => !open)}>
        Mas{open ? <div>Desplegable</div> : null }
    </div>
}