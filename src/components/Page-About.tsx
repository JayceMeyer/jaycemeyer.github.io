import "../css/Page.css";

export function AboutPage() {
    return (
        <div id="about-page" className="page-wrapper">
            <div id="about-text" className="page-content">
                <h4>A little info about me</h4>
                <h6>Based in Lakewood, CO</h6>
                <p><span className="whitespace" />​</p>

                <p>I'm a driven, detail oriented full-stack Software Engineer
                    with a passion for creating well-designed, user friendly
                    software that customers genuinely love. I enjoy learning
                    new things and I'm not afraid to try something I've never
                    done before. I'm a very personable, engaging, and hard working
                    team player. I work best when I know my team is in sync
                    and when I feel confident in my understanding of the platform.</p>
                <p><span className="whitespace" />​</p>

                <p>I'm experienced on Windows, Mac, and Linux systems, and I code in
                    C# .NET, EF Core, Angular, React, and occasionally Python.
                    I'm most knowledgeable in SQL on the backend, but have also worked
                    with Postgres and Rocket DB. Currently, I'm learning about coding
                    front-end maps with MapLibre, and using Amazon Web Services to allow
                    me to make even more robust, reliable, and performant API micro-services.</p>
                <p><span className="whitespace" />​</p>

                <p>In my free time I love being home with my family (and being a dad),
                    working on house projects, spending time in the Colorado outdoors
                    (motorcycle riding, hiking, backpacking, mountain biking, playing with our dog),
                    and eating delicious food.</p>
            </div>
        </div>
    );
}