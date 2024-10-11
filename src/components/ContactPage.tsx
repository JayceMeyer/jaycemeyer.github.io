import linkedinImg from "../../public/assets/linkedin.png";
import facebookImg from "../../public/assets/facebook.png";
import instagramImg from "../../public/assets/instagram.png";
import "../css/Page.css";

export function ContactPage() {
    return (
        <div id="contact-page" className="page-wrapper">
            <div className="page-container">
                <div className="float-child half padding-right">
                    <h4><span>Get in Touch</span></h4>
                    <p><span className="whitespace">​</span></p>

                    <p>Please email me at: <a href="mailto:jaycemeyer@gmail.com" target="_blank">jaycemeyer@gmail.com</a></p>
                    <p><span className="whitespace">​</span></p>
                    <div className="contact-links">
                        <a href="https://www.linkedin.com/in/jayce-meyer-6b5309141/" target="_blank" rel="noopener" className="bubble">
                            <img src={linkedinImg} alt="linkedin"></img>
                        </a>
                        <a href="https://www.facebook.com/jayce.meyer" target="_blank" rel="noopener" className="bubble">
                            <img style={{ height: "18px" }} src={facebookImg} alt="facebook"></img>
                        </a>
                        <a href="https://www.instagram.com/jaycenat/" target="_blank" rel="noopener" className="bubble">
                            <img src={instagramImg} alt="instagram"></img>
                        </a>
                    </div>
                </div>

                <div className="float-child half padding-right">
                <p><span className="whitespace">​</span></p>
                </div>
            </div>
        </div>
    );
}