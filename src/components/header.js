import * as React from "react"
import { Link } from "gatsby"
import * as headerStyles from './header.module.css'

const Header = ({ siteTitle }) => {
  const handleHomeClick = (e) => {
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      e.preventDefault();
      window.location.scrollTo(0, 0);
    }
  }
  return (
    <header className={headerStyles.header}>
    <Link to="/" className={headerStyles.navLink} onClick={handleHomeClick}>
      <span class={`${headerStyles.navNumber}`}>01. </span>Home
    </Link>
    <nav>
      <Link to='#resume' className={`${headerStyles.navLink}`}><span className={`${headerStyles.navNumber}`}>02. </span>Resume</Link>
      <Link to='#portfolio' className={headerStyles.navLink}><span className={`${headerStyles.navNumber}`}>03. </span>Projects</Link>
      <Link to='#blog' className={headerStyles.navLink}><span className={`${headerStyles.navNumber}`}>04. </span>Blog</Link>
      <Link to='#contact' className={headerStyles.navLink}><span className={`${headerStyles.navNumber}`}>05. </span>Contact</Link>
    </nav>
  </header>
  )
}

export default Header
