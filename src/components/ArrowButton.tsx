import "../css/ArrowButton.css";

export function ArrowButton(
    {
        onClick,
        text = "Resume"
    }: {
        onClick: any,
        text?: string
    }
) {
    const handleClick = () => {
        onClick();
    }

    return (
        <a className="arrow-button-container" href='#' onClick={() => handleClick()}>
            <div className="arrow-button">{text}</div>
            <div className="arrow-right"></div>
        </a>
    );
}