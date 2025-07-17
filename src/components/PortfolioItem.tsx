import "../css/PortfolioItem.css";

export function PortfolioItem({
    title,
    text,
    cardHref,
    cardImgSrc,
    cardAltText
}: {
    title: string,
    text: string,
    cardHref: string,
    cardImgSrc: string,
    cardAltText: string
}) {
    return (
        <div className="portfolio-item">
            <div className="portfolio-content">
                <h5 className="portfolio-title">{title}</h5>
                <p className="portfolio-description">{text}</p>
                <a href={cardHref} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                    <span className="link-text">View Project</span>
                    <span className="link-arrow">→</span>
                </a>
            </div>
            <div className="portfolio-image">
                <a href={cardHref} target="_blank" rel="noopener noreferrer">
                    <img src={cardImgSrc} alt={cardAltText} />
                    <div className="image-overlay">
                        <div className="overlay-content">
                            <span className="overlay-icon">🔗</span>
                            <span className="overlay-text">View Project</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}