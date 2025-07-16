import { useEffect, useState, useRef } from 'react';
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

// Debounce function to prevent rapid updates
function debounce(func: Function, wait: number) {
  let timeout: ReturnType<typeof setTimeout>;
  return function(...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Track the last section we've seen to prevent bouncing
let lastProcessedSection = '';

// Flag to disable intersection updates during programmatic scrolling
let isNavigating = false;

// Helper to create a navigation lock with timeout
function createNavigationLock(duration: number) {
  isNavigating = true;
  setTimeout(() => {
    isNavigating = false;
  }, duration);
}

export default function App() {
  const [activeSection, setActiveSection] = useState(about);
  initializeTheme();
  
  // Create refs for each section
  const aboutRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);
  const cvRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  
  // Function to update URL based on active section
  const updateURL = (section: string) => {
    if (section === about) {
      // For About section, use the root URL
      window.history.pushState({}, '', '/');
    } else {
      // For other sections, add the section name to the URL
      window.history.pushState({}, '', `/${section.toLowerCase().replace('.', '').replace(' ', '-')}`);
    }
  };
  
  // Function to get initial section from URL
  const getSectionFromURL = (): string => {
    // Check if we have an initialPath from a redirect
    // @ts-ignore - initialPath is added to window in index.html
    const redirectPath = window.initialPath || window.location.pathname;
    
    // Parse the path
    const path = redirectPath;
    if (path === '/' || path === '') {
      return about;
    } else if (path === '/portfolio') {
      return portfolio;
    } else if (path === '/cv') {
      return cv;
    } else if (path === '/contact') {
      return contact;
    }
    return about; // Default to about if URL doesn't match
  };
  
  // Function to handle navigation click
  const handleNavClick = (pageName: string) => {
    let targetRef;
    switch(pageName) {
      case about:
        targetRef = aboutRef;
        break;
      case portfolio:
        targetRef = portfolioRef;
        break;
      case cv:
        targetRef = cvRef;
        break;
      case contact:
        targetRef = contactRef;
        break;
      default:
        targetRef = aboutRef;
    }
    
    // Create a navigation lock to prevent IntersectionObserver from updating
    // during programmatic scrolling (1000ms should cover the scroll duration)
    createNavigationLock(1000);
    
    // Update URL based on the selected section
    updateURL(pageName);
    
    // Update active section and last processed section to maintain consistency
    setActiveSection(pageName);
    lastProcessedSection = pageName;
    
    // Scroll to the section
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Initialize active section from URL on component mount
  useEffect(() => {
    const initialSection = getSectionFromURL();
    setActiveSection(initialSection);
    lastProcessedSection = initialSection; // Set last processed section to prevent bouncing
    
    // Update URL to match the section (in case we came from a redirect)
    updateURL(initialSection);
    
    // Scroll to the appropriate section based on URL
    let targetRef;
    switch(initialSection) {
      case about:
        targetRef = aboutRef;
        break;
      case portfolio:
        targetRef = portfolioRef;
        break;
      case cv:
        targetRef = cvRef;
        break;
      case contact:
        targetRef = contactRef;
        break;
      default:
        targetRef = aboutRef;
    }
    
    if (targetRef && targetRef.current) {
      // Create a navigation lock to prevent IntersectionObserver from interfering
      createNavigationLock(1000);
      
      // Use a small timeout to ensure the DOM is ready
      setTimeout(() => {
        targetRef.current?.scrollIntoView({ behavior: 'auto' });
      }, 100);
    }
    
    // Clear the initialPath from window after we've used it
    // @ts-ignore - initialPath is added to window in index.html
    if (window.initialPath) {
      // @ts-ignore
      delete window.initialPath;
    }
    
    // Handle browser back/forward buttons
    const handlePopState = () => {
      const newSection = getSectionFromURL();
      setActiveSection(newSection);
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);
  
  // Set up intersection observer to detect which section is in view
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-10% 0px -10% 0px', // Adjust the margin to make detection more accurate
      threshold: [0.1, 0.2, 0.3, 0.4, 0.5], // Multiple thresholds for better detection
    };
    
    // Create a single debounced update function to handle both state and URL updates
    // This prevents the bouncing effect by ensuring updates happen together
    const debouncedUpdateSection = debounce((sectionId: string) => {
      if (lastProcessedSection !== sectionId) {
        lastProcessedSection = sectionId;
        setActiveSection(sectionId);
        updateURL(sectionId);
      }
    }, 200); // 200ms delay is enough to prevent flickering without feeling laggy
    
    // Use a more stable approach with IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      // Skip updates if we're currently navigating programmatically
      if (isNavigating) {
        return;
      }
      
      // Find the most visible section
      let maxVisibility = 0;
      let mostVisibleSection = '';
      
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Calculate how much of the section is visible
          const visibleRatio = entry.intersectionRatio;
          if (visibleRatio > maxVisibility) {
            maxVisibility = visibleRatio;
            mostVisibleSection = entry.target.id;
          }
        }
      });
      
      // Only update if we found a visible section and it's different from current active section
      if (mostVisibleSection && mostVisibleSection !== activeSection) {
        debouncedUpdateSection(mostVisibleSection);
      }
    }, options);
    
    // Observe all section refs
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (portfolioRef.current) observer.observe(portfolioRef.current);
    if (cvRef.current) observer.observe(cvRef.current);
    if (contactRef.current) observer.observe(contactRef.current);
    
    return () => {
      // Clean up observer on unmount
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (portfolioRef.current) observer.unobserve(portfolioRef.current);
      if (cvRef.current) observer.unobserve(cvRef.current);
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, [activeSection]);
  
  return (
    <div className="app-container">
      <Header></Header>

      <main className="main-wrapper">
        <SideNav activeSection={activeSection} onNavClick={handleNavClick}></SideNav>

        <div className="main-content" id="main-content">
          <section id={about} ref={aboutRef} className="section">
            <AboutPage></AboutPage>
          </section>
          <section id={portfolio} ref={portfolioRef} className="section">
            <PortfolioPage></PortfolioPage>
          </section>
          <section id={cv} ref={cvRef} className="section">
            <CurriculumVitaePage></CurriculumVitaePage>
          </section>
          <section id={contact} ref={contactRef} className="section">
            <ContactPage></ContactPage>
          </section>
        </div>
      </main>

      <Footer></Footer>
    </div>
  )
}
