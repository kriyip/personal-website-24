import * as React from "react"
import { Link } from "gatsby"
import * as headerStyles from './header.module.css'

// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       margin: `0 auto`,
//       padding: `var(--space-4) var(--size-gutter)`,
//       display: `flex`,
//       alignItems: `center`,
//       justifyContent: `space-between`,
//     }}
//   >
//     <Link
//       to="/"
//       style={{
//         fontSize: `var(--font-sm)`,
//         textDecoration: `none`,
//       }}
//     >
//       {siteTitle}
//     </Link>
//     <Link to='/resume'>Resume</Link>
//     <Link to='/portfolio'>Projects</Link>
//     <Link to='/blog'>Blog</Link>
//     <Link to='/contact'>Contactasdf</Link>
//   </header>
// )

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <Link to="/" className={headerStyles.navLink}>
      01. Home
    </Link>
    <nav>
      <Link to='/resume' className={`${headerStyles.navLink}`}><span>02.</span> Resume</Link>
      <Link to='/portfolio' className={headerStyles.navLink}><span>03.</span>  Projects</Link>
      <Link to='/blog' className={headerStyles.navLink}><span>04.</span>  Blog</Link>
      <Link to='/contact' className={headerStyles.navLink}><span>05.</span>  Contact</Link>
    </nav>
  </header>
)

export default Header
