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
    // Handle both onClick and href functionality
    const handleClick = (e: React.MouseEvent) => {
        // If we have an onClick handler, use it and prevent default navigation
        if (onClick !== undefined && onClick !== null) {
            e.preventDefault();
            onClick();
            return;
        }
        
        // For href links without onClick, let the browser handle navigation naturally
        // No preventDefault() here so the link works normally
    };

    return (
        <a 
            className={`${size === "lg" ? "lg-bubble-button" : "sm-bubble-button"} ${animated ? "animated-button" : ""}`}
            title={title} 
            onClick={handleClick}
            href={href || "#"}
            target={href ? "_blank" : undefined}
            rel={href ? "noopener noreferrer" : undefined}
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