import "../css/ArrowCard.css";

export function ArrowCard(
    {
        title,
        href,
        imgSrc,
        altText
    }: {
        title: string,
        href: string,
        imgSrc: string,
        altText: string
    }
) {
    return (
        <div className="card-container">
            <a className="card" href={href} target="_blank" title={title}>
                <div className="arrow-left"></div>
                <div className="card-img-wrapper">
                    <img className="card-img" src={imgSrc} alt={altText}></img>
                    <div className="click-overlay">
                        <div className="click-icon">🔗</div>
                        <div className="click-text">Click to View</div>
                    </div>
                </div>
            </a>
        </div>
    );
}