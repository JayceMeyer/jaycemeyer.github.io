import headImg from "../../public/images/head-shot.jpg"
import { CustomButton } from "../components/CustomButton";

export function AboutPage({}: {setContent: any}) {
    const handleClick = () => {
        // setContent("resume");
        window.open('public/images/Jayce Meyer Resume (Aug 2024).jpg', '_blank');
    }

    return (
        <div id="about-page" className="page">
            <div className="float-container">
                <div className="float-child half padding-right">
                    <img style={{height: "150px", width: "150px", objectFit: "cover"}} src={headImg} alt="jayce-picture.jpg"></img>
                </div>
                
                <div className="float-child half">
                    <div className="custom-button-container">
                        <CustomButton onClick={() => handleClick()}></CustomButton>
                    </div>
                </div>
            </div>
            
            <div className="float-container">
                <div className="float-child half padding-right">
                    <div id="about-text" data-testid="richTextElement">
                        <h2 style={{lineHeight:"2em", fontSize:"16px"}}><span>Here's a little info about me:</span></h2>
                        <p style={{lineHeight:"1.5em", fontSize:"14px"}}><span>Based in Denver, CO</span></p>
                        <p style={{lineHeight:"1.5em", fontSize:"14px"}}>&nbsp;</p>
                        <p style={{lineHeight:"1.5em",fontSize:"14px"}}><span>I'm a driven, detail oriented full-stack Software Engineer with a passion for creating well-designed, user friendly software that customers genuinely love. I enjoy learning new things and I'm not afraid to try something I've never done before. I'm a very personable, engaging, and hard working team player. I work best when I know my team is in sync and when I feel confident in my understanding of the platform.&nbsp;</span></p>
                        <p style={{lineHeight:"1.5em",fontSize:"14px"}}><span className="whitespace">​</span></p>
                        <p style={{lineHeight:"1.5em",fontSize:"14px"}}><span>I'm experienced on Windows, Mac, and Linux systems, and I code in C# .NET, EF Core, Angular, React, and occasionally Python. I'm most knowledgeable in SQL on the backend, but have also worked with Postgres and Rocket DB. Currently, I'm learning about coding front-end maps with MapLibre, and Amazon Web Services to allow me to make even more robust, reliable, and performant API micro-services.&nbsp;</span></p>
                        <p style={{lineHeight:"1.5em",fontSize:"14px"}}><span className="whitespace">​</span></p>
                        <p style={{lineHeight:"1.5em",fontSize:"14px"}}><span>In my free time I love being home with my family (and being a dad), working on house projects, spending time in the Colorado outdoors (motorcycle riding, hiking, backpacking, mountain biking, playing with our dog), and eating delicious food.</span></p>
                    </div>
                </div>
                
                <div className="float-child half">  
                    <div id="cv-text" data-testid="richTextElement">
                        <h2 style={{fontSize:"16px"}}>CV</h2>
                        <p style={{lineHeight:"2em", fontSize:"16px"}}><span style={{textDecoration:"underline"}}>Experience</span></p>
                        <p style={{lineHeight:"1em",fontSize:"16px"}}><span>2021 - Present&nbsp;:&nbsp;<span style={{fontStyle:"italic"}}>National Park Service</span></span></p>
                        <p style={{fontSize:"16px"}}><span>Senior System & Software Engineer - Team Lead</span></p>
                        <p style={{fontSize:"16px"}}><span><span className="whitespace">​</span></span></p>
                        <p style={{lineHeight:"1em",fontSize:"16px"}}><span>2018 - 2021&nbsp;:&nbsp;<span style={{fontStyle:"italic"}}>Vertafore, Inc.</span></span></p>
                        <p style={{fontSize:"16px"}}><span>Software Engineer</span></p>
                        <p style={{fontSize:"16px"}}><span><span className="whitespace">​</span></span></p>
                        <p style={{fontSize:"16px"}}>2016&nbsp;- Present :&nbsp;<span style={{fontStyle:"italic"}}>The Buff Restaurant</span></p>
                        <p style={{fontSize:"16px"}}>Payroll Specialist</p>
                        <p style={{fontSize:"16px"}}><span><span className="whitespace">​</span></span></p>
                        <p style={{fontSize:"16px"}}>May '16 - July '16 :&nbsp;<span style={{fontStyle:"italic"}}>agent24, Inc.</span></p>
                        <p style={{fontSize:"16px"}}>Software &amp; Network Internship</p>
                        <p style={{fontSize:"16px"}}><span className="whitespace">​</span></p>
                        <p style={{fontSize:"16px"}}>2010&nbsp;- 2018 :&nbsp;<span style={{fontStyle:"italic"}}>The Buff Restaurant</span></p>
                        <p style={{fontSize:"16px"}}>Manager &amp; Barista</p>
                        
                        <h2 style={{fontSize:"16px"}}><span className="whitespace">​</span></h2>
                        
                        <p style={{fontSize:"16px"}}><span style={{textDecoration:"underline"}}>Education</span></p>
                        <p style={{fontSize:"14px"}}>2012 - 2017 <span style={{fontStyle:"italic"}}>University of Colorado at Boulder</span></p>
                        <p style={{fontSize:"14px"}}>Bachelor of Arts in Computer Science - Dean's List</p>
                    </div>
                </div>
            </div>
        </div>
    );
}