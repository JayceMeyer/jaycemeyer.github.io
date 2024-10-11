import "../css/BubbleButton.css";

export function BubbleButton(
    {
        onClick,
        href,
        altText,
        imgSrc,
        title,
        size = "lg",
        imgHeight
    }: {
        onClick?: any,
        href?: string,
        altText?: string,
        imgSrc?: string,
        title?: string,
        size?: "sm" | "lg",
        imgHeight?: string
    }
) {
    const handleClick = () => {
        if (onClick) onClick();
        else if (href?.length) window.open(href, "_blank", "noopener");
    }

    return (
        <a className={size === "lg" ? "lg-bubble-button" : "sm-bubble-button"} title={title} onClick={() => handleClick()}>
            <img className={size === "lg" ? "lg-bubble-img" : ""} style={imgHeight?.length ? { height: imgHeight } : {}} src={imgSrc} alt={altText}></img>
        </a>
    );
}