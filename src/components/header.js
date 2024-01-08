import * as React from "react"
import { Link } from "gatsby"
import * as headerStyles from './header.module.css'

const Header = ({ siteTitle }) => {
  const [showNavbar, setShowNavbar] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const scrollThreshold = 10;

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      // Calculate the scroll difference
      const scrollDiff = window.scrollY - lastScrollY;

      // Check if the scroll is greater than the threshold
      if (Math.abs(scrollDiff) > scrollThreshold) {
        if (scrollDiff > 0) {
          // Scrolling down
          setShowNavbar(false);
        } else {
          // Scrolling up
          setShowNavbar(true);
        }
        // Update the last scroll position
        setLastScrollY(window.scrollY);
      }
    }
  };

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const handleHomeClick = (e) => {
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      e.preventDefault();
      window.location.scrollTo(0, 0);
    }
  }

  const smoothScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handling navigation link click
  const handleNavClick = (e, id) => {
    e.preventDefault();
    smoothScrollTo(id);
  };

  return (
    <header className={`${headerStyles.header} ${showNavbar ? headerStyles.visible : headerStyles.hidden}`}>
    <Link to="/" className={headerStyles.navLink} onClick={handleHomeClick}>
      <span className={`${headerStyles.navNumber}`}>01. </span>Home
    </Link>
    <nav>
      <a href='#resume' onClick={(e) => handleNavClick(e, 'resume')} className={`${headerStyles.navLink}`}>
        <span className={`${headerStyles.navNumber}`}>02. </span>
        Resume
      </a>
      <a href='#portfolio' onClick={(e) => handleNavClick(e, 'portfolio')} className={headerStyles.navLink}><span className={`${headerStyles.navNumber}`}>03. </span>Projects</a>
      {/* <Link to='#blog' className={headerStyles.navLink}><span className={`${headerStyles.navNumber}`}>04. </span>Blog</Link> */}
      <a href='#contact' className={headerStyles.navLink}><span className={`${headerStyles.navNumber}`}>05. </span>Contact</a>
    </nav>
  </header>
  )
}

export default Header
