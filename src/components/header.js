import * as React from "react"
import { Link } from "gatsby"
import * as headerStyles from './header.module.css'
import { Link as ScrollLink } from 'react-scroll';

const Header = ({ siteTitle }) => {
  const [showNavbar, setShowNavbar] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {      
      const currentScrollY = window.scrollY;

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
    <header className={`${headerStyles.header} ${showNavbar ? headerStyles.visible : headerStyles.hidden}`}>
    <Link to="/" className={headerStyles.navLink} onClick={handleHomeClick}>
      <span className={`${headerStyles.navNumber}`}>01.</span>HOME
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
          <span className={`${headerStyles.navNumber}`}>02.</span>RESUME
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
          <span className={`${headerStyles.navNumber}`}>03.</span>PROJECTS
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
          <span className={`${headerStyles.navNumber}`}>04.</span>CONTACT
        </ScrollLink>
    </nav>
    
    {/* <nav>
      <a href='#resume' onClick={(e) => handleNavClick(e, 'resume')} className={`${headerStyles.navLink}`}>
        <span className={`${headerStyles.navNumber}`}>02. </span>
        Resume
      </a>
      <a href='#portfolio' onClick={(e) => handleNavClick(e, 'portfolio')} className={headerStyles.navLink}><span className={`${headerStyles.navNumber}`}>03. </span>Projects</a>
      <Link to='#blog' className={headerStyles.navLink}><span className={`${headerStyles.navNumber}`}>04. </span>Blog</Link>
      <a href='#contact' className={headerStyles.navLink}><span className={`${headerStyles.navNumber}`}>05. </span>Contact</a>
    </nav> */}
  </header>
  )
}

export default Header
