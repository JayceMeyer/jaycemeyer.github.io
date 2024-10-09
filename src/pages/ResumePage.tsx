import resumeImg from "../../public/images/Jayce Meyer Resume (Oct 2024).png"

export function ResumePage() {
    return (
        <div id="resume-page" className="page">
            <div className="float-container">
                <div className="float-child">
                    <a href="images/Jayce Meyer Resume (Oct 2024).pdf" target={resumeImg}>
                        <img style={{height: "1100px", width: "800px", objectFit: "cover"}} src={resumeImg} alt="Jayce Meyer Resume.jpg"></img>
                    </a>
                </div>
            </div>
        </div>
    );
}