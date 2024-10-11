import headImg from "../../public/assets/head-shot.jpg";
import { openResume, toggleTheme } from "../Helpers";
import '../css/Header.css';
import { ArrowButton } from "./ArrowButton";
import { BubbleButton } from "./BubbleButton";

export function Header() {
    const handleClick = (btn: string) => {
        if (btn === "theme") toggleTheme();
        else openResume();
    }

    return (
        <header className="header-main">
            <div className="header-content">
                <BubbleButton onClick={() => handleClick("theme")} altText="Jayce Picture Logo" imgSrc={headImg} title="Toggle Theme" />
                <h1 className="header-bar-title">Jayce Meyer</h1>
            </div>

            <div className="header-content">
                <ArrowButton onClick={() => handleClick("resume")}></ArrowButton>
            </div>
        </header>
    );
}