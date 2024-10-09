import linkedinImg from "../assets/linkedin.png";
import facebookImg from "../assets/facebook.png";
import instagramImg from "../assets/instagram.png";

export function ContactPage() {
    return (
        <div id="contact-page" className="page">
                
            <div className="float-container">
                <div className="float-child">

                    <div id="contact-text" data-testid="richTextElement">  
                        <h2 style={{lineHeight: "2em", fontSize: "16px"}}><span>Get in Touch</span></h2>
                        <p style={{paddingBottom: "1px"}}></p>
                        
                        <p style={{lineHeight:"2.5em",fontSize:"16px",paddingBottom:"1em"}}><span>
                        Please email me at: <a href="mailto:jaycemeyer@gmail.com" target="_blank" style={{color: "var(--orange)"}}>jaycemeyer@gmail.com</a>
                    </span></p>

                        <div className="contact-links">
                            <a href="https://www.linkedin.com/in/jayce-meyer-6b5309141/" target="_blank" rel="noopener" className="bubble">
                                <img style={{paddingRight: "8px", height: "28px", width: "28px", objectFit: "cover"}} src={linkedinImg} alt="linkedin"></img>
                            </a>
                            <a href="https://www.facebook.com/jayce.meyer" target="_blank" rel="noopener" className="bubble">
                                <img style={{paddingRight: "10px", height: "18px", width: "18px", objectFit: "cover"}} src={facebookImg} alt="facebook"></img>
                            </a>
                            <a href="https://www.instagram.com/jaycenat/" target="_blank" rel="noopener" className="bubble">
                                <img style={{height: "20px", width: "20px", objectFit: "cover"}} src={instagramImg} alt="instagram"></img>
                            </a>
                        </div>
                    </div>

                    <p style={{paddingBottom: "20px"}}></p>

                    {/* <contact-form></contact-form> */}

                </div>
            </div>
                
        </div>
    );
}