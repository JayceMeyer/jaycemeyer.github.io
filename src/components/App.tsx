import { useEffect, useState } from 'react';
import '../css/App.css';
import { AboutPage } from './Page-About';
import { ContactPage } from './Page-Contact';
import { PortfolioPage } from './Page-Portfolio';
import { initializeTheme } from "../Helpers";
import { Header } from "./Header";
import { Footer } from './Footer';
import { SideNav } from './SideNav';
import { about, cv, contact, portfolio } from '../Constants';
import { CurriculumVitaePage } from './Page-CurriculumVitae';

export default function App() {
  const [shownContent, setShownContent] = useState("");
  initializeTheme();

  useEffect(() => {
    setShownContent(about);
  }, []);

  const handleClick = (pageName: string) => {
    setShownContent(pageName);
  }

  return (
    <>
      <Header></Header>

      <main className="main-wrapper">
        <SideNav shownContent={shownContent} setShownContent={handleClick}></SideNav>

        <div className="main-content" id="main-content">
          <div className={shownContent === about ? "show" : "hide"}>
            {shownContent === about && <AboutPage></AboutPage>}
          </div>
          <div className={shownContent === portfolio ? "show" : "hide"}>
            {shownContent === portfolio && <PortfolioPage></PortfolioPage>}
          </div>
          <div className={shownContent === cv ? "show" : "hide"}>
            {shownContent === cv && <CurriculumVitaePage></CurriculumVitaePage>}
          </div>
          <div className={shownContent === contact ? "show" : "hide"}>
            {shownContent === contact && <ContactPage></ContactPage>}
          </div>
        </div>
      </main>

      <Footer></Footer>
    </>
  )
}
