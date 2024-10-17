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
                <img className="card-img" src={imgSrc} alt={altText}></img>
            </a>
        </div>
    );
}