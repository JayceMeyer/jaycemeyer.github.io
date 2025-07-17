import headImg from "/assets/head-shot.jpg";
import { openResume, toggleTheme } from "../Helpers";
import '../css/Header.css';
import { BubbleButton } from "./BubbleButton";

export function Header() {
    const handleClick = (btn: string) => {
        if (btn === "theme") toggleTheme();
        else openResume();
    }

    return (
        <header className="header-main">
            <div className="header-content">
                <BubbleButton 
                    onClick={() => handleClick("theme")} 
                    altText="Jayce Picture Logo" 
                    imgSrc={headImg} 
                    title="Toggle Theme" 
                    animated={true} 
                />
                <div className="name-button-section">
                    <h1 className="header-name">Jayce Meyer</h1>
                    <button className="resume-button mobile-resume-button" onClick={() => handleClick("resume")}>
                        View Resume
                    </button>
                </div>
            </div>

            <div className="header-content">
                <button className="resume-button" onClick={() => handleClick("resume")}>
                    View Resume
                </button>
            </div>
        </header>
    );
}