import { Link } from "react-router-dom";
import Style from "./menu.module.css";

function Menu() {
  return (
    <header>
        <nav className={Style.navegacao}>
            <Link className={Style.link} to="/">
                Inicio
            </Link>
            <Link className={Style.link} to="/SobreMim">
                Sobre Mim
            </Link>
        </nav>
    </header>
  );
}

export default Menu;