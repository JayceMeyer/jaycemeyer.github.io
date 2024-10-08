export function CustomButton({onClick, text = "Resume"}: {onClick: any, text?: string}) {
    const handleClick = () => {
        onClick();
    }

    return (
        <a href='#' onClick={() => handleClick()}>
            <div className="custom-button">{text}</div>
            <div className="arrow-right"></div>
        </a>
    );
}