import "../css/Page.css";
import "../css/Page-CV.css";

export function CurriculumVitaePage() {
    return (
        <div id="cv-text" className="page-wrapper">
            <div className="page-content">
                <h4>Curriculum Vitae</h4>
                
                <div className="cv-summary">
                    <div className="summary-card">
                        <h5>Professional Summary</h5>
                        <p>Senior full-stack software engineer with 7+ years of experience leading development teams and architecting scalable web applications. Proven track record of delivering high-quality software solutions serving 250+ active users.</p>
                    </div>
                </div>

                <div className="cv-section">
                    <h5>Professional Experience</h5>
                    
                    <div className="experience-item current">
                        <div className="experience-header">
                            <div className="position-info">
                                <h6 className="position-title">Senior System & Software Architect</h6>
                                <span className="company-name">National Park Service</span>
                            </div>
                            <div className="duration">
                                <span className="duration-badge current">2021 - Present</span>
                            </div>
                        </div>
                        <div className="role-details">
                            <span className="role-subtitle">Team Lead</span>
                            <ul className="achievements">
                                <li>Lead development team for internal web application serving 250+ active users</li>
                                <li>Design and architect full-stack solutions using Angular, C#/.NET, and SQL</li>
                                <li>Train and mentor new developers joining the project</li>
                                <li>Collaborate on National Park Service trail mapping systems</li>
                            </ul>
                        </div>
                    </div>

                    <div className="experience-item">
                        <div className="experience-header">
                            <div className="position-info">
                                <h6 className="position-title">Software Engineer II</h6>
                                <span className="company-name">Vertafore, Inc.</span>
                            </div>
                            <div className="duration">
                                <span className="duration-badge">2018 - 2021</span>
                            </div>
                        </div>
                        <div className="role-details">
                            <span className="role-subtitle">Scrum Master</span>
                            <ul className="achievements">
                                <li>Developed and maintained enterprise insurance software solutions</li>
                                <li>Led agile development processes as Scrum Master</li>
                                <li>Collaborated with cross-functional teams to deliver high-quality software</li>
                            </ul>
                        </div>
                    </div>

                    <div className="experience-item">
                        <div className="experience-header">
                            <div className="position-info">
                                <h6 className="position-title">Software & Network Internship</h6>
                                <span className="company-name">agent24, Inc.</span>
                            </div>
                            <div className="duration">
                                <span className="duration-badge">May '16 - July '16</span>
                            </div>
                        </div>
                        <div className="role-details">
                            <ul className="achievements">
                                <li>Gained hands-on experience in software development and network administration</li>
                                <li>Contributed to various development projects and system maintenance</li>
                            </ul>
                        </div>
                    </div>

                    <div className="other-experience">
                        <h6>Additional Experience</h6>
                        <div className="other-roles">
                            <div className="other-role">
                                <span className="role-title">Payroll Specialist</span>
                                <span className="company">The Buff Restaurant</span>
                                <span className="duration">2016 - 2018</span>
                            </div>
                            <div className="other-role">
                                <span className="role-title">Manager & Barista</span>
                                <span className="company">The Buff Restaurant</span>
                                <span className="duration">2010 - 2018</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cv-section">
                    <h5>Education</h5>
                    
                    <div className="education-item">
                        <div className="education-header">
                            <div className="degree-info">
                                <h6 className="degree-title">Bachelor of Arts in Computer Science</h6>
                                <span className="institution">University of Colorado at Boulder</span>
                            </div>
                            <div className="duration">
                                <span className="duration-badge">2012 - 2017</span>
                            </div>
                        </div>
                        <div className="education-details">
                            <div className="honor-badge">
                                <span className="honor-icon">🎓</span>
                                <span>Dean's List</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cv-section">
                    <h5>Core Competencies</h5>
                    <div className="competencies-grid">
                        <div className="competency-category">
                            <h6>Leadership</h6>
                            <ul>
                                <li>Team Leadership</li>
                                <li>Project Management</li>
                                <li>Mentoring & Training</li>
                                <li>Agile/Scrum</li>
                            </ul>
                        </div>
                        <div className="competency-category">
                            <h6>Technical</h6>
                            <ul>
                                <li>Full-Stack Development</li>
                                <li>System Architecture</li>
                                <li>Database Design</li>
                                <li>Cloud Services (AWS)</li>
                            </ul>
                        </div>
                        <div className="competency-category">
                            <h6>Technologies</h6>
                            <ul>
                                <li>C#/.NET, Angular, React</li>
                                <li>SQL, PostgreSQL</li>
                                <li>MapLibre, GeoJSON</li>
                                <li>Windows, Mac, Linux</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}