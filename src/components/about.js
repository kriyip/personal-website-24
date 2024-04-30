import * as React from "react"
import * as styles from "../components/index.module.css"
// import selfImage from '../images/self.png';

// todo: move content into gatsby-config or json file thing
const AboutSection = ({ data }) => (
    <div className={`${styles.aboutText} ${styles.fullHeight}`}>
        
    <span className={styles.sectionNumber}>01. Hey, this website was made by...</span>
    <h1>Kristine Yip.</h1>
    <p>
        I'm a passionate and dedicated software-engineer-in-the-making with 
        a love for learning and crafting innovative solutions through code. I'm a current third-year
        CS student at the University of Pennsylvania with experiences in
        systems programming and artificial intelligence.
        In my free time, I enjoy creating side projects (like this website) to
        refine my creative and technical skills. I also love exploring the
        outdoors and capturing its beauty through the lens of my camera.
        <br></br>
        <br></br>
        Please note that this website is still a work in progress, please stay tuned for updates!
    </p>
    </div>
)

export default AboutSection