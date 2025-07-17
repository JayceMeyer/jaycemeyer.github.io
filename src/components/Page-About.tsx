import "../css/Page.css";
import "../css/Page-About.css";

export function AboutPage() {
    return (
        <div id="about-page" className="page-wrapper">
            <div id="about-text" className="page-content">
                <h4>About Me</h4>
                
                <div className="info-badges">
                    <div className="location-badge">
                        <span className="location-icon">📍</span>
                        <span>Based in Lakewood, CO</span>
                    </div>
                    <div className="availability-status">
                        <div className="status-indicator available"></div>
                        <span>Currently open to new opportunities</span>
                    </div>
                </div>

                <div className="about-section">
                    <div className="highlight-card">
                        <h5>Who I Am</h5>
                        <p>I'm a driven, detail-oriented full-stack Software Engineer
                            with a passion for creating well-designed, user-friendly
                            software that customers genuinely love. I enjoy learning
                            new things and I'm not afraid to try something I've never
                            done before. I'm a very personable, engaging, and hard-working
                            team player who thrives in collaborative environments.</p>
                    </div>

                    <div className="skills-section">
                        <h5>Technical Expertise</h5>
                        <div className="tech-grid">
                            <div className="tech-category">
                                <h6>Languages & Frameworks</h6>
                                <div className="tech-tags">
                                    <span className="tech-tag">C# .NET</span>
                                    <span className="tech-tag">EF Core</span>
                                    <span className="tech-tag">Angular</span>
                                    <span className="tech-tag">React</span>
                                    <span className="tech-tag">Python</span>
                                </div>
                            </div>
                            <div className="tech-category">
                                <h6>Databases & Cloud</h6>
                                <div className="tech-tags">
                                    <span className="tech-tag">SQL</span>
                                    <span className="tech-tag">PostgreSQL</span>
                                    <span className="tech-tag">Rocket DB</span>
                                    <span className="tech-tag">AWS</span>
                                </div>
                            </div>
                            <div className="tech-category">
                                <h6>Currently Learning</h6>
                                <div className="tech-tags">
                                    <span className="tech-tag learning">MapLibre</span>
                                    <span className="tech-tag learning">AWS Microservices</span>
                                </div>
                            </div>
                        </div>
                        <p>I'm experienced across Windows, Mac, and Linux systems, always
                            exploring new technologies to build more robust, reliable, and
                            performant solutions.</p>
                    </div>

                    <div className="personal-section">
                        <h5>Beyond Code</h5>
                        <div className="interests-grid">
                            <div className="interest-item">
                                <span className="interest-icon">👨‍👩‍👧‍👦</span>
                                <span>Family time & being a dad</span>
                            </div>
                            <div className="interest-item">
                                <span className="interest-icon">🏠</span>
                                <span>House projects</span>
                            </div>
                            <div className="interest-item">
                                <span className="interest-icon">🏔️</span>
                                <span>Colorado outdoors</span>
                            </div>
                            <div className="interest-item">
                                <span className="interest-icon">🏍️</span>
                                <span>Motorcycle riding</span>
                            </div>
                            <div className="interest-item">
                                <span className="interest-icon">🥾</span>
                                <span>Hiking & backpacking</span>
                            </div>
                            <div className="interest-item">
                                <span className="interest-icon">🚵</span>
                                <span>Mountain biking</span>
                            </div>
                            <div className="interest-item">
                                <span className="interest-icon">🐕</span>
                                <span>Playing with our dogs</span>
                            </div>
                            <div className="interest-item">
                                <span className="interest-icon">🍽️</span>
                                <span>Delicious food</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}