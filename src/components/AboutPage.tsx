import "../css/Page.css";

export function AboutPage() {
    return (
        <div id="about-page" className="page-wrapper">

            <div className="page-container">
                <div className="float-child half padding-right">
                    <div id="about-text" data-testid="richTextElement">
                        <h4>Here's a little info about me:</h4>
                        <h6>Based in Lakewood, CO</h6>
                        <p><span className="whitespace" />​</p>
                        <p>I'm a driven, detail oriented full-stack Software Engineer with a passion for creating well-designed, user friendly software that customers genuinely love. I enjoy learning new things and I'm not afraid to try something I've never done before. I'm a very personable, engaging, and hard working team player. I work best when I know my team is in sync and when I feel confident in my understanding of the platform.&nbsp;</p>
                        <p><span className="whitespace" />​</p>
                        <p>I'm experienced on Windows, Mac, and Linux systems, and I code in C# .NET, EF Core, Angular, React, and occasionally Python. I'm most knowledgeable in SQL on the backend, but have also worked with Postgres and Rocket DB. Currently, I'm learning about coding front-end maps with MapLibre, and Amazon Web Services to allow me to make even more robust, reliable, and performant API micro-services.&nbsp;</p>
                        <p><span className="whitespace" />​</p>
                        <p>In my free time I love being home with my family (and being a dad), working on house projects, spending time in the Colorado outdoors (motorcycle riding, hiking, backpacking, mountain biking, playing with our dog), and eating delicious food.</p>
                    </div>
                </div>

                <p><span className="whitespace" />​</p>

                <div className="float-child half">
                    <div id="cv-text" data-testid="richTextElement">
                        <h4>CV</h4>
                        <p><span className="whitespace" />​</p>
                        <h5><span style={{ textDecoration: "underline" }}>Experience</span></h5>
                        <h6><span>2021 - Present&nbsp;:&nbsp;<span style={{ fontStyle: "italic" }}>National Park Service</span></span></h6>
                        <p><span>Senior System & Software Engineer - Team Lead</span></p>
                        <p><span><span className="whitespace">​</span></span></p>
                        <h6><span>2018 - 2021&nbsp;:&nbsp;<span style={{ fontStyle: "italic" }}>Vertafore, Inc.</span></span></h6>
                        <p><span>Software Engineer</span></p>
                        <p><span><span className="whitespace">​</span></span></p>
                        <h6>2016&nbsp;- Present :&nbsp;<span style={{ fontStyle: "italic" }}>The Buff Restaurant</span></h6>
                        <p>Payroll Specialist</p>
                        <p><span><span className="whitespace">​</span></span></p>
                        <h6>May '16 - July '16 :&nbsp;<span style={{ fontStyle: "italic" }}>agent24, Inc.</span></h6>
                        <p>Software &amp; Network Internship</p>
                        <p><span className="whitespace">​</span></p>
                        <h6>2010&nbsp;- 2018 :&nbsp;<span style={{ fontStyle: "italic" }}>The Buff Restaurant</span></h6>
                        <p>Manager &amp; Barista</p>

                        <h2><span className="whitespace">​</span></h2>

                        <h5><span style={{ textDecoration: "underline" }}>Education</span></h5>
                        <h6>2012 - 2017 <span style={{ fontStyle: "italic" }}>University of Colorado at Boulder</span></h6>
                        <p>Bachelor of Arts in Computer Science - Dean's List</p>
                    </div>
                </div>
            </div>
        </div>
    );
}