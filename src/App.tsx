import { useState } from 'react'
import './App.css'
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PortfolioPage } from './pages/PortfolioPage';

export let title = 'jaycemeyer-website';
export let date = new Date().getFullYear();

export default function App() {
  const [content, setContent] = useState("about");

  const handleClick = (pageName: string) => {
    setContent(pageName);
  }

  return (
    <div className="root-container">
      <div className="header-bar" role="banner">
        <div className="header-bar-content">
          
          <a className="circle-card" title="Home" onClick={() => handleClick("about")}>
            <p className="circle-card-letter">J</p>
          </a>

          <span className="header-bar-title">Jayce Meyer</span>

        </div>
      </div>

      <div className="content-container" role="main">
        <div className="side-nav-container" role="navigation">
          <a className={content === "about" ? "selected-side-nav-item" : "side-nav-item"} onClick={() => handleClick("about")}>About</a>
          <a className={content === "portfolio" ? "selected-side-nav-item" : "side-nav-item"} onClick={() => handleClick("portfolio")}>Portfolio</a>
          <a className={content === "contact" ? "selected-side-nav-item" : "side-nav-item"} onClick={() => handleClick("contact")}>Contact</a>
        </div>

        <div className="content-detail" id="content-detail">
          {content === "about" && <AboutPage setContent={handleClick}></AboutPage>}
          {content === "portfolio" && <PortfolioPage setContent={handleClick}></PortfolioPage>}
          {content === "contact" && <ContactPage></ContactPage>}
        </div>
      </div>
      
      <footer>© { date } by Jayce Meyer</footer>
    </div>
  )
}
