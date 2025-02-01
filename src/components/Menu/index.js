import Style from "./menu.module.css";
import MenuLink from "../MeuLink";

function Menu() {
  return (
    <header>
        <nav className={Style.navegacao}>
            <MenuLink to="/">
                Inicio
            </MenuLink>
            <MenuLink to="/SobreMim">
                Sobre Mim
            </MenuLink>
        </nav>
    </header>
  );
}

export default Menu;