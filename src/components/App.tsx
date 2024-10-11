import { useState } from 'react';
import '../css/App.css';
import { AboutPage } from './AboutPage';
import { ContactPage } from './ContactPage';
import { PortfolioPage } from './PortfolioPage';
import { initializeTheme } from "../Helpers";
import { Header } from "./Header";
import { Footer } from './Footer';
import { SideNav } from './SideNav';
import { aboutPage as about, contactPage as contact, portfolioPage as portfolio } from '../Constants';

export let title = 'jaycemeyer-website';

export default function App() {
  const [shownContent, setShownContent] = useState(about);
  initializeTheme();

  const handleClick = (pageName: string) => {
    setShownContent(pageName);
  }

  return (
    <>
      <Header></Header>

      <main className="main-wrapper">
        <SideNav shownContent={shownContent} setShownContent={handleClick}></SideNav>

        <div className="main-content" id="main-content">
          {shownContent === about && <AboutPage></AboutPage>}
          {shownContent === portfolio && <PortfolioPage></PortfolioPage>}
          {shownContent === contact && <ContactPage></ContactPage>}
        </div>
      </main>

      <Footer></Footer>
    </>
  )
}
