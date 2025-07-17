import sRattsImg from "/assets/SRatts_Fine_Art.png";
import trailMapImg from "/assets/Trail_Map.png";
import candyGalleryImg from "/assets/Candy_Gallery.png";
import duelCalcImg from "/assets/Duel_Calculator.png";
import jokeImg from "/assets/Joke_Generator.png";
import "../css/Page.css";
import "../css/Page-Portfolio.css";
import { PortfolioItem } from "./PortfolioItem";

export function PortfolioPage() {
    return (
        <div id="portfolio-page" className="page-wrapper">
            <div className="page-content">
                <h4>Portfolio & Projects</h4>
                
                <div className="portfolio-intro">
                    <div className="work-style-card">
                        <div className="card-header">
                            <span className="work-icon">💼</span>
                            <h5>Work Style</h5>
                        </div>
                        <p>I'm a remote-first self-starter. I bounce between working independently, within a team, and cross-team as the day requires,
                            at times focusing on service & support directly with customers, and at other times focusing on bringing ideas from <strong>Proof of Concept</strong> to <strong>fully-developed Deployment</strong>.</p>
                    </div>

                    <div className="current-role-section">
                        <h5>Current Role</h5>
                        <div className="role-highlight">
                            <div className="role-badge">
                                <span className="role-icon">🏛️</span>
                                <span>National Park Service</span>
                            </div>
                            <p>I'm currently the <strong>project lead and senior engineer</strong> for the
                                National Park Service internal web-app used by the Office of
                                Public Health. I design, architect, build, and maintain the full
                                software stack for this application serving <strong>over 250 active users</strong>.
                                I also train and assist new developers joining the project.</p>
                            
                            <div className="tech-stack">
                                <span className="stack-label">Tech Stack:</span>
                                <div className="stack-tags">
                                    <span className="stack-tag">Angular</span>
                                    <span className="stack-tag">C#/.NET</span>
                                    <span className="stack-tag">SQL</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="additional-work">
                        <p>In addition, I work on the National Park Service maps for
                            Trail data and information at
                            <a href="https://www.nps.gov/index.htm" target="_blank">
                                NPS.gov
                            </a>.</p>
                    </div>

                    <div className="projects-intro">
                        <h5>Side Projects</h5>
                        <p>Take a look at some of my personal projects on
                            <a href="https://github.com/JayceMeyer" target="_blank">
                                Github
                            </a>. This website was built with React in 2024.</p>
                    </div>
                </div>

                <div className="projects-grid">
                    <h5>Featured Projects</h5>
                    <PortfolioItem
                        title="S. Ratts Fine Art (2025)"
                        text="A custom designed webpage showcasing artwork by Shannon Ratts. (Written in React.js)"
                        cardHref="https://srattsfineart.github.io/"
                        cardImgSrc={sRattsImg}
                        cardAltText="s ratts fine art image" />

                    <PortfolioItem
                        title="The Trail Map (2024)"
                        text="A demo version of the NPS mapping tool for plotting Trails, Points of Interest, Alerts, and Elevation using maplibre-gl and GeoJson. (Written in React.js)"
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
                        text="My first ever React app. A fun way to battle your friends (and your enemies) with your most powerful playing card deck. (Written in React.js)"
                        cardHref="https://jaycemeyer.github.io/React-Duel-Calculator/"
                        cardImgSrc={duelCalcImg}
                        cardAltText="duel calculator image" />

                    {/* <PortfolioItem
                        title="The Joke & Excuse Generator (2018)"
                        text="When you just need a little pick me up, this little app will lift your spirits. Need to work from home, but just don't know the best way to break it to the team? Enter the Joke & Excuse Generator. (Written in C# - Windows Forms)"
                        cardHref="https://github.com/JayceMeyer/Joke-Excuse-Generator-EXE/"
                        cardImgSrc={jokeImg}
                        cardAltText="joke generator image" /> */}
                </div>
            </div>
        </div>
    );
}