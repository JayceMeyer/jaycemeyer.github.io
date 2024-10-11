import "../css/PortfolioItem.css";
import { ArrowCard } from "./ArrowCard";

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
        <div className="portfolio-item-wrapper">
            <div className="portfolio-column">
                <p><span className="whitespace">​</span></p>
                <h5>{title}:</h5>
                <p><span className="whitespace">​</span></p>
                <p>{text}</p>
                <p><span className="whitespace">​</span></p>
            </div>

            <div className="portfolio-column">
                <ArrowCard
                    title={title}
                    href={cardHref}
                    imgSrc={cardImgSrc}
                    altText={cardAltText}>
                </ArrowCard>
            </div>
        </div>
    );
}