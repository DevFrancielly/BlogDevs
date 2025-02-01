import { Link, useLocation } from "react-router-dom";
import Style from "./menulink.module.css";

function MenuLink({ children, to }) {
    const pageIdentification = useLocation()

    return (
        <Link className={`
           ${Style.link}
           ${pageIdentification.pathname === to ? Style.highlightedLink : ""}
        `} to={to}>
            {children}
        </Link>
    );
}

export default MenuLink;