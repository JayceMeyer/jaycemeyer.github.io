import trailmapImg from "../../public/assets/Trail_Map.png";
import candygalleryImg from "../../public/assets/Candy_Gallery.png";
import duelcalcImg from "../../public/assets/Duel_Calculator.png";
import jokeImg from "../../public/assets/Joke_Generator.png";
import { CustomCard } from "./CustomCard";
import "../css/Page.css";

export function PortfolioPage() {
    return (
        <div id="portfolio-page" className="page-wrapper">
            <div className="page-content">
                <div className="float-child half padding-right">
                    <h4>Portfolio & Projects</h4>
                    <p><span className="whitespace">​</span></p>

                    <p>I work primarily independently, and occasionally cross-team, to bring ideas from Proof of Concept to Deployment.</p>
                    <p><span className="whitespace">​</span></p>
                    <p>I'm currently the project lead and senior engineer for the National Park Service internal web-app used by the Office of Public Health. I design, architect, build, and maintain the full software stack for this application (serving over 250 active users). I also train and assist new developers to the project. This web-app stack is Angular, C#/.NET, and SQL.</p>
                    <p><span className="whitespace">​</span></p>
                    <p>In addition, I work on the National Park Service maps for Trail data and information at <a href="https://www.nps.gov/index.htm" target="_blank">NPS.gov</a>.</p>

                    <p><span className="whitespace">​</span></p>
                </div>

                <div className="float-child">
                    <p><span className="whitespace">​</span></p>


                    <p><span className="whitespace">​</span></p>

                    <p>
                        Take a look at some of my side projects on <a href="https://github.com/JayceMeyer" target="_blank">Github</a>.
                    </p>
                    <p>Note: This website was written with React in 2024 (last updated 2024).</p>

                    <p><span className="whitespace">​</span></p>
                </div>
            </div>

            <p><span className="whitespace">​</span></p>
            <p><span className="whitespace">​</span></p>
            <p><span className="whitespace">​</span></p>

            <div className="page-container">
                <div className="float-child half padding-right">
                    <div data-testid="richTextElement">
                        <p><span className="whitespace">​</span></p>
                        <h5>
                            The Trail Map (2024):&nbsp;
                        </h5>
                        <p><span className="whitespace">​</span></p>
                        <p>
                            <span>A tool for plotting Trails, Points of Interest, Alerts, and Elevation using maplibre-gl and GeoJson.
                                (Written in React.js)&nbsp;</span>
                        </p>

                        <p><span className="whitespace">​</span></p>
                    </div>
                </div>

                <div className="float-child half">
                    <CustomCard
                        customClassName="button-tile-duel-calc"
                        href="https://jaycemeyer.github.io/Trail-Map/"
                        imgSrc={trailmapImg}
                        altText="trail-map.png">
                    </CustomCard>
                </div>
            </div>

            <p><span className="whitespace">​</span></p>
            <p><span className="whitespace">​</span></p>
            <p><span className="whitespace">​</span></p>

            <div className="page-container">
                <div className="float-child half padding-right">
                    <div data-testid="richTextElement">
                        <h5>
                            <span>The Candy Gallery (2023):&nbsp;</span>
                        </h5>
                        <p><span className="whitespace">​</span></p>
                        <p>
                            <span>A fun way to view your photos by picking a random image from a selected Picture folder hierarchy.
                                (Written in C# - Windows Forms)&nbsp;</span>
                        </p>

                        <p><span className="whitespace">​</span></p>
                    </div>
                </div>

                <div className="float-child half">
                    <CustomCard
                        customClassName="button-tile-candy-gal"
                        href="https://github.com/JayceMeyer/Candy-Gallery"
                        imgSrc={candygalleryImg}
                        altText="candy-gallery.png">
                    </CustomCard>
                </div>
            </div>

            <p><span className="whitespace">​</span></p>
            <p><span className="whitespace">​</span></p>
            <p><span className="whitespace">​</span></p>

            <div className="page-container">
                <div className="float-child half padding-right">
                    <div data-testid="richTextElement">
                        <h5>
                            <span>The Yu-Gi-Oh! Duel Calculator (2019):&nbsp;</span>
                        </h5>
                        <p><span className="whitespace">​</span></p>
                        <p>
                            <span>A fun way to battle your friends (and your enemies) with your most powerful playing card deck.
                                (Written in React.js)&nbsp;</span>
                        </p>

                        <p><span className="whitespace">​</span></p>
                    </div>
                </div>

                <div className="float-child half">
                    <CustomCard
                        customClassName="button-tile-duel-calc"
                        href="https://jaycemeyer.github.io/React-Duel-Calculator/"
                        imgSrc={duelcalcImg}
                        altText="duel-calculator.png">
                    </CustomCard>
                </div>
            </div>

            <p><span className="whitespace">​</span></p>
            <p><span className="whitespace">​</span></p>
            <p><span className="whitespace">​</span></p>

            <div className="page-container">
                <div className="float-child half padding-right">
                    <div data-testid="richTextElement">
                        <h5>
                            <span>The Joke & Excuse Generator (2018):&nbsp;</span>
                        </h5>
                        <p><span className="whitespace">​</span></p>
                        <p>
                            <span>When you just need a little pick me up, this little app will lift your spirits. Need to
                                work from home, but just don't know the best way to break it to the team? Enter
                                the Joke & Excuse Generator. (Written in C# - Windows Forms)&nbsp;</span>
                        </p>
                    </div>
                </div>

                <div className="float-child half">
                    <CustomCard
                        customClassName="button-tile-joke-gen"
                        href="https://github.com/JayceMeyer/Joke-Excuse-Generator-EXE"
                        imgSrc={jokeImg}
                        altText="joke-generator.png">
                    </CustomCard>
                </div>
            </div>

        </div>
    )
}