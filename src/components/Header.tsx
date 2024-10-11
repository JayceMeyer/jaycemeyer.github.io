import headImg from "../../public/assets/head-shot.jpg";
import { openResume, toggleTheme } from "../Helpers";
import '../css/Header.css';
import { CustomButton } from "./CustomButton";

export function Header() {
    const handleClick = (btn: string) => {
        if (btn === "theme") toggleTheme();
        else openResume();
    }

    return (
        <header className="header-main">

            <div className="header-content">
                <a className="logo-button" title="Toggle Theme" onClick={() => handleClick("theme")}>
                    <img className="logo-img" src={headImg} alt="jayce picture logo"></img>
                </a>
                <h1 className="header-bar-title">Jayce Meyer</h1>
            </div>

            <div className="header-content">
                <CustomButton onClick={() => handleClick("resume")}></CustomButton>
            </div>

        </header>
    );
}