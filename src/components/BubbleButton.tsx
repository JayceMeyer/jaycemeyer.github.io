import "../css/BubbleButton.css";

export function BubbleButton(
    {
        onClick,
        href,
        altText,
        imgSrc,
        title,
        size = "lg",
        imgHeight,
        animated = false
    }: {
        onClick?: any,
        href?: string,
        altText?: string,
        imgSrc?: string,
        title?: string,
        size?: "sm" | "lg",
        imgHeight?: string,
        animated?: boolean
    }
) {
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent default behavior
        
        if (onClick !== undefined && onClick !== null) {
            onClick();
        } else if (href?.length) {
            window.open(href, "_blank", "noopener");
        }
    }

    return (
        <a 
            className={`${size === "lg" ? "lg-bubble-button" : "sm-bubble-button"} ${animated ? "animated-button" : ""}`}
            title={title} 
            onClick={handleClick}
            href={href || "#"} // Add href attribute for better accessibility
            target="_blank"
            rel="noopener noreferrer"
        >
            <img 
                className={size === "lg" ? "lg-bubble-img" : ""} 
                style={imgHeight?.length ? { height: imgHeight } : {}} 
                src={imgSrc} 
                alt={altText}
            />
        </a>
    );
}