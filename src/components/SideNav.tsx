import { about, cv, contact, portfolio } from "../Constants";
import "../css/SideNav.css";

export function SideNav(
    {
        shownContent,
        setShownContent
    }: {
        shownContent: any,
        setShownContent: any
    }
) {
    const handleClick = (pageName: string) => {
        setShownContent(pageName);
    }

    return (
        <nav className="side-nav-wrapper">
            <a className={shownContent === about ? "selected-side-nav-item" : "side-nav-item"} onClick={() => handleClick(about)}>{about}</a>
            <a className={shownContent === portfolio ? "selected-side-nav-item" : "side-nav-item"} onClick={() => handleClick(portfolio)}>{portfolio}</a>
            <a className={shownContent === cv ? "selected-side-nav-item" : "side-nav-item"} onClick={() => handleClick(cv)}>{cv}</a>
            <a className={shownContent === contact ? "selected-side-nav-item" : "side-nav-item"} onClick={() => handleClick(contact)}>{contact}</a>
        </nav>
    );
}