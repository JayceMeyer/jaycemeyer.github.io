import { aboutPage, contactPage, portfolioPage } from "../Constants";
import "../css/SideNav.css";

export function SideNav({ shownContent, setShownContent }: { shownContent: any, setShownContent: any }) {
    const handleClick = (pageName: string) => {
        setShownContent(pageName);
    }

    return (
        <nav className="side-nav-wrapper">
            <a className={shownContent === aboutPage ? "selected-side-nav-item" : "side-nav-item"} onClick={() => handleClick(aboutPage)}>{aboutPage}</a>
            <a className={shownContent === portfolioPage ? "selected-side-nav-item" : "side-nav-item"} onClick={() => handleClick(portfolioPage)}>{portfolioPage}</a>
            <a className={shownContent === contactPage ? "selected-side-nav-item" : "side-nav-item"} onClick={() => handleClick(contactPage)}>{contactPage}</a>
        </nav>
    );
}