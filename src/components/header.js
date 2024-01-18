import * as React from "react"
import { Link } from "gatsby"
import * as headerStyles from './header.module.css'
import { Link as ScrollLink } from 'react-scroll';

const Header = ({ siteTitle }) => {
  const [showNavbar, setShowNavbar] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const [isTop, setIsTop] = React.useState(true);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {      
      const currentScrollY = window.scrollY;
      setIsTop(currentScrollY === 0);

      if (currentScrollY <= 80) {
        setShowNavbar(true);
      } else {
        const scrollDiff = window.scrollY - lastScrollY;
        setShowNavbar(scrollDiff > 0 ? false : true);
      }

      setLastScrollY(currentScrollY);
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
      console.log("asljdfns");
      e.preventDefault();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth' // Enables smooth scrolling
      });
    }
  }

  return (
    <header className={`${headerStyles.header} ${showNavbar ? headerStyles.visible : headerStyles.hidden} ${isTop ? headerStyles.noBoxShadow : ''}`}>
    <Link to="/" className={headerStyles.navLink} onClick={handleHomeClick}>
      <span className={`${headerStyles.navNumber}`}>01.</span>Home
    </Link>
    <nav>
      <ScrollLink
          activeClass="active"
          to="resume"
          spy={true}
          smooth={true}
          offset={-70}
          duration={700}
          className={headerStyles.navLink}
        >
          <span className={`${headerStyles.navNumber}`}>02.</span>Resume
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-70}
          duration={700}
          className={headerStyles.navLink}
        >
          <span className={`${headerStyles.navNumber}`}>03.</span>Projects
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={700}
          className={headerStyles.navLink}
        >
          <span className={`${headerStyles.navNumber}`}>04.</span>Contact
        </ScrollLink>
    </nav>
    
  </header>
  )
}

export default Header
