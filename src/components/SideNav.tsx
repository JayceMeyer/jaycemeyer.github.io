import { about, cv, contact, portfolio } from "../Constants";
import "../css/SideNav.css";

export function SideNav(
    {
        activeSection,
        onNavClick
    }: {
        activeSection: string,
        onNavClick: (pageName: string) => void
    }
) {
    return (
        <nav className="side-nav-wrapper">
            <a className={activeSection === about ? "selected-side-nav-item" : "side-nav-item"} onClick={() => onNavClick(about)}>{about}</a>
            <a className={activeSection === portfolio ? "selected-side-nav-item" : "side-nav-item"} onClick={() => onNavClick(portfolio)}>{portfolio}</a>
            <a className={activeSection === cv ? "selected-side-nav-item" : "side-nav-item"} onClick={() => onNavClick(cv)}>{cv}</a>
            <a className={activeSection === contact ? "selected-side-nav-item" : "side-nav-item"} onClick={() => onNavClick(contact)}>{contact}</a>
        </nav>
    );
}