import linkedinImg from "/assets/linkedin.png";
import facebookImg from "/assets/facebook.png";
import instagramImg from "/assets/instagram.png";
import githubImg from "/assets/github.png";
import "../css/Page.css";
import { BubbleButton } from "./BubbleButton";

export function ContactPage() {
    return (
        <div id="contact-page" className="page-wrapper">
            <div className="page-content">
                <h4>Get in Touch</h4>
                <p><span className="whitespace">​</span></p>

                <p>Please email me at:
                    <a href="mailto:jaycemeyer@gmail.com" target="_blank">
                        jaycemeyer@gmail.com
                    </a></p>
                <p><span className="whitespace">​</span></p>

                <div className="line-wrapper">
                    <BubbleButton
                        href="https://www.linkedin.com/in/jayce-meyer-6b5309141/"
                        altText="linkedin"
                        imgSrc={linkedinImg}
                        title="LinkedIn"
                        size="sm" />

                    <BubbleButton
                        href="https://www.facebook.com/jayce.meyer"
                        altText="facebook"
                        imgSrc={facebookImg}
                        title="Facebook"
                        size="sm"
                        imgHeight="18px" />

                    <BubbleButton
                        href="https://www.instagram.com/jaycenat/"
                        altText="instagram"
                        imgSrc={instagramImg}
                        title="Instagram"
                        size="sm" />

                    <BubbleButton
                        href="https://github.com/JayceMeyer/"
                        altText="github"
                        imgSrc={githubImg}
                        title="Github"
                        size="sm"
                        imgHeight="20px" />
                </div>
            </div>
        </div>
    );
}