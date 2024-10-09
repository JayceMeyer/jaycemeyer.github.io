import trailmapImg from "../assets/Trail_Map.png";
import candygalleryImg from "../assets/Candy_Gallery.png";
import duelcalcImg from "../assets/Duel_Calculator.png";
import jokeImg from "../assets/Joke_Generator.png";
import { CustomButton } from "../components/CustomButton";
import { CustomCard } from "../components/CustomCard";

export function PortfolioPage({}: {setContent: any}) {
    const handleClick = () => {
        // setContent("resume");
        window.open('src/assets/Jayce Meyer Resume (Aug 2024).jpg', '_blank');
    }

    return (
        <div id="portfolio-page" className="page">
            <div className="float-container">
                <div className="float-child half padding-right">
                    <h2 style={{lineHeight:"2em",fontSize:"16px"}}><span>Portfolio & Projects</span></h2>
                    
                    <p style={{lineHeight:"1.5em",fontSize:"14px"}}><span>
                    I work primarily independently, and occasionally cross-team, to bring ideas from Proof of Concept to Deployment.
                    </span></p>

                    <p style={{lineHeight:"1.5em",fontSize:"14px"}}><span>
                    I'm currently the project lead and senior engineer for the National Park Service internal web-app used by the Office of Public Health. I design, architect, build, and maintain the full software stack for this application (serving over 250 active users). I also train and assist new developers to the project. This web-app stack is Angular, C#/.NET, and SQL.
                    </span></p>

                    <p style={{lineHeight:"1.5em",fontSize:"14px"}}><span>
                    In addition, I work on the National Park Service maps for Trail data and information at <a href="https://www.nps.gov/index.htm" target="_blank" style={{color: "var(--orange)"}}>NPS.gov</a>.
                    </span></p>
                    
                    <p><span className="whitespace">​</span></p>
                </div>

                <div className="float-child">
                    <p><span className="whitespace">​</span></p>

                    <div className="button-container">
                        <CustomButton onClick={() => handleClick()}></CustomButton>
                    </div>

                    <p><span className="whitespace">​</span></p>

                    <p style={{lineHeight:"1.5em",fontSize:"14px"}}><span>
                        Take a look at some of my side projects on <a href="https://github.com/JayceMeyer" target="_blank" style={{color: "var(--orange)"}}>Github</a>.
                    </span></p>
                    <p><span>Note: This website was written with React in 2024 (last updated 2024).</span></p>

                    <p><span className="whitespace">​</span></p>
                </div>
            </div>

            <div className="float-container">
                <div className="float-child half padding-right">
                    <div data-testid="richTextElement">
                        <p style={{lineHeight:"1.5em",fontSize:"18px",fontStyle: "italic"}}>
                            <span>The Trail Map (2024):&nbsp;</span>
                        </p>
                        <p style={{lineHeight:"1.5em",fontSize:"16px"}}>
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

            <div className="float-container">
                <div className="float-child half padding-right">
                    <div data-testid="richTextElement">
                        <p style={{lineHeight:"1.5em",fontSize:"18px",fontStyle: "italic"}}>
                            <span>The Candy Gallery (2023):&nbsp;</span>
                        </p>
                        <p style={{lineHeight:"1.5em",fontSize:"16px"}}>
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

            <div className="float-container">
                <div className="float-child half padding-right">
                    <div data-testid="richTextElement">
                        <p style={{lineHeight:"1.5em",fontSize:"18px",fontStyle: "italic"}}>
                            <span>The Yu-Gi-Oh! Duel Calculator (2019):&nbsp;</span>
                        </p>
                        <p style={{lineHeight:"1.5em",fontSize:"16px"}}>
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

            <div className="float-container">
                <div className="float-child half padding-right">
                    <div data-testid="richTextElement">
                        <p style={{lineHeight:"1.5em",fontSize:"18px",fontStyle: "italic"}}>
                            <span>The Joke & Excuse Generator (2018):&nbsp;</span>
                        </p>
                        <p style={{lineHeight:"1.5em",fontSize:"16px"}}>
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