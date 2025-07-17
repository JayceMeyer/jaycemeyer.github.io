import linkedinImg from "/assets/linkedin.png";
import facebookImg from "/assets/facebook.png";
import instagramImg from "/assets/instagram.png";
import githubImg from "/assets/github.png";
import "../css/Page.css";
import "../css/Page-Contact.css";

export function ContactPage() {
    return (
        <div id="contact-page" className="page-wrapper">
            <div className="page-content">
                <h4>Get in Touch</h4>
                
                <div className="contact-intro">
                    <div className="intro-card">
                        <div className="intro-icon">💬</div>
                        <h5>Let's Connect</h5>
                        <p>I'm always interested in discussing new opportunities, collaborating on projects, or just having a conversation about technology and development.</p>
                    </div>
                </div>

                <div className="contact-methods">
                    <div className="contact-section">
                        <h5>📧 Email</h5>
                        <div className="email-card">
                            <p>For professional inquiries, project discussions, or general questions:</p>
                            <div className="email-wrapper">
                                <a href="mailto:jaycemeyer@gmail.com" className="email-link" target="_blank">
                                    <span className="email-icon">✉️</span>
                                    <span className="email-address">jaycemeyer@gmail.com</span>
                                    <span className="email-arrow">→</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-section">
                        <h5>🌐 Social & Professional</h5>
                        <div className="social-grid">
                            <a href="https://www.linkedin.com/in/jayce-meyer-6b5309141/" target="_blank" rel="noopener noreferrer" className="social-item">
                                <div className="social-info">
                                    <h6>LinkedIn</h6>
                                    <p>Professional network & career updates</p>
                                </div>
                                <div className="social-icon">
                                    <img src={linkedinImg} alt="LinkedIn" />
                                </div>
                            </a>

                            <a href="https://github.com/JayceMeyer/" target="_blank" rel="noopener noreferrer" className="social-item">
                                <div className="social-info">
                                    <h6>GitHub</h6>
                                    <p>Code repositories & open source projects</p>
                                </div>
                                <div className="social-icon">
                                    <img src={githubImg} alt="GitHub" />
                                </div>
                            </a>

                            <a href="https://www.facebook.com/jayce.meyer" target="_blank" rel="noopener noreferrer" className="social-item">
                                <div className="social-info">
                                    <h6>Facebook</h6>
                                    <p>Personal updates & connections</p>
                                </div>
                                <div className="social-icon">
                                    <img src={facebookImg} alt="Facebook" />
                                </div>
                            </a>

                            <a href="https://www.instagram.com/jaycenat/" target="_blank" rel="noopener noreferrer" className="social-item">
                                <div className="social-info">
                                    <h6>Instagram</h6>
                                    <p>Photography & outdoor adventures</p>
                                </div>
                                <div className="social-icon">
                                    <img src={instagramImg} alt="Instagram" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact-footer">
                    <div className="footer-card">
                        {/* <h6>Response Time</h6>
                        <p>I typically respond to emails within 24-48 hours. For urgent matters, please mention "URGENT" in your subject line.</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
}