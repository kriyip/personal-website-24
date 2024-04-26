import * as React from "react"
import * as styles from "../components/index.module.css"
// import selfImage from '../images/self.png';

// todo: move content into gatsby-config or json file thing
const AboutSection = ({ data }) => (
    // <div className={`${styles.container} ${styles.about}`}>
    //     {/* <div className={`${styles.imageContainer}`}>
    //         <img src={selfImage} alt="Kristine Yip" className={styles.img}></img>
    //     </div> */}
    //     <div className={styles.aboutText}>
    //         <span className={styles.sectionNumber}>01. Hey, this website was made by...</span>
    //         <h1>Kristine Yip.</h1>
    //         <p>
    //             {/* I'm a passionate and dedicated software-engineer-in-the-making with 
    //             a love for learning and crafting innovative solutions through code.
    //             I'm currently a third-year computer science student at the University of Pennsylvania,
    //             and I've had the privilege to work in a variety of environments ranging from
    //             dynamic startups to large corporations. My previous experiences and interests lie
    //             in the fields of systems programming, artificial intelligence, and web development.
    //             I'm not currently looking for work but I'm always open to opportunities that allow me
    //             to grow and connect with like-minded individuals! */}
    //             I'm a passionate and dedicated software-engineer-in-the-making with 
    //             a love for learning and crafting innovative solutions through code. I'm a current third-year
    //             CS student at the University of Pennsylvania with experiences in
    //             systems programming and artificial intelligence.
    //             In my free time, I enjoy creating side projects (like this website) to
    //             refine my creative and technical skills. I also love exploring the
    //             outdoors and capturing its beauty through the lens of my camera.

    //             <br></br>
    //             <br></br>
    //             Please note that this website is still a work in progress, please stay tuned for updates!
    //         </p>
    //     </div>
    // </div>

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