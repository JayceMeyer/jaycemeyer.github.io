import "../css/Footer.css";

export function Footer() {
    const date = new Date().getFullYear();

    return (
        <footer>© {date} by Jayce Meyer</footer>
    );
}