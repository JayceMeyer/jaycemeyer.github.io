import trailMapImg from "/assets/Trail_Map.png";
import candyGalleryImg from "/assets/Candy_Gallery.png";
import duelCalcImg from "/assets/Duel_Calculator.png";
import jokeImg from "/assets/Joke_Generator.png";
import "../css/Page.css";
import { PortfolioItem } from "./PortfolioItem";

export function PortfolioPage() {
    return (
        <div id="portfolio-page" className="page-wrapper">
            <div className="page-content">
                <h4>Portfolio & Projects</h4>
                <p><span className="whitespace">​</span></p>

                <p>I work primarily independently, and occasionally cross-team,
                    to bring ideas from Proof of Concept to Deployment.</p>
                <p><span className="whitespace">​</span></p>

                <p>I'm currently the project lead and senior engineer for the
                    National Park Service internal web-app used by the Office of
                    Public Health. I design, architect, build, and maintain the full
                    software stack for this application (serving over 250 active users).
                    I also train and assist new developers to the project.
                    This web-app stack is Angular, C#/.NET, and SQL.</p>
                <p><span className="whitespace">​</span></p>

                <p>In addition, I work on the National Park Service maps for
                    Trail data and information at
                    <a href="https://www.nps.gov/index.htm" target="_blank">
                        NPS.gov
                    </a>.</p>
                <p><span className="whitespace">​</span></p>

                <p>Take a look at some of my side projects on
                    <a href="https://github.com/JayceMeyer" target="_blank">
                        Github
                    </a>. (This website was written with React in 2024).</p>
            </div>

            <PortfolioItem
                title="The Trail Map (2024)"
                text="A tool for plotting Trails, Points of Interest, Alerts, and Elevation using maplibre-gl and GeoJson. (Written in React.js)"
                cardHref="https://jaycemeyer.github.io/Trail-Map/"
                cardImgSrc={trailMapImg}
                cardAltText="trail map image" />

            <PortfolioItem
                title="The Candy Gallery (2023)"
                text="An exciting way to view your photos by picking a random image from a selected Picture folder hierarchy. (Written in C# - Windows Forms)"
                cardHref="https://github.com/JayceMeyer/Candy-Gallery/"
                cardImgSrc={candyGalleryImg}
                cardAltText="candy gallery image" />

            <PortfolioItem
                title="The Yu-Gi-Oh! Duel Calculator (2019)"
                text="A fun way to battle your friends (and your enemies) with your most powerful playing card deck. (Written in React.js)"
                cardHref="https://jaycemeyer.github.io/React-Duel-Calculator/"
                cardImgSrc={duelCalcImg}
                cardAltText="duel calculator image" />

            <PortfolioItem
                title="The Joke & Excuse Generator (2018)"
                text="When you just need a little pick me up, this little app will lift your spirits. Need to work from home, but just don't know the best way to break it to the team? Enter the Joke & Excuse Generator. (Written in C# - Windows Forms)"
                cardHref="https://github.com/JayceMeyer/Joke-Excuse-Generator-EXE/"
                cardImgSrc={jokeImg}
                cardAltText="joke generator image" />
        </div>
    )
}