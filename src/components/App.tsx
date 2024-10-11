import { useState } from 'react';
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
          {shownContent === cv && <CurriculumVitaePage></CurriculumVitaePage>}
          {shownContent === contact && <ContactPage></ContactPage>}
        </div>
      </main>

      <Footer></Footer>
    </>
  )
}
