import resumeImg from "../../public/images/Jayce Meyer Resume (Aug 2024).jpg"

export function ResumePage() {
    return (
        <div id="resume-page" className="page">
            <div className="float-container">
                <div className="float-child">
                    <a href="images/Jayce Meyer Resume (Aug 2024).jpg" target={resumeImg}>
                        <img style={{height: "1100px", width: "800px", objectFit: "cover"}} src={resumeImg} alt="Jayce Meyer Resume.jpg"></img>
                    </a>
                </div>
            </div>
        </div>
    );
}