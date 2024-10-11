export function CustomCard(
    {
        customClassName,
        href,
        imgSrc,
        altText
    }: {
        customClassName: string,
        href: string,
        imgSrc: string,
        altText: string
    }) {
    return (
        <div className="card-container">
            <a href={href} target="_blank"><div className="arrow-left"></div>
                <div className={`button-tile ${customClassName}`}>
                    <img style={{ height: "100%" }} src={imgSrc} alt={altText}></img>
                </div>
            </a>
        </div>
    );
}