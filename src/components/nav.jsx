import { useState } from "react";
import { NavItem } from "./nav-Item";
import { Dropdown } from "./dropdown";
import "./Nav.css";

export function Nav() {
  const [menu, setMenu] = useState([
    { nombre: "Inicio", icono: "mdi-home" },
    { nombre: "Buscar", icono: "" },
    { nombre: "Explorar", icono: "" },
    { nombre: "Reels", icono: "" },
    { nombre: "Mendsajes", icono: "" },
    { nombre: "Notificaciones", icono: "" },
    { nombre: "Crear", icono: "" },
    { nombre: "Perfil", icono: "" }]);
  return (
    <div className="Nav">
      Reacgram{" "}
      {menu.map((elemento, i) => (
        <NavItem nombre={elemento.nombre} key={i}></NavItem>
      ))}
      <Dropdown></Dropdown>
    </div>
  );
}
