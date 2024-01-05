import * as React from "react"
import * as styles from "../components/index.module.css"

// todo: move content into gatsby-config or json file thing
const AboutSection = () => (
    <div className={`${styles.container} ${styles.about}`}>
        <div className={`${styles.imageContainer}`}>div 1: image of myself</div>
        <div className={styles.aboutText}>
            <span className={styles.sectionNumber}>01. Hey, this website was made by...</span>
            <h1>Kristine Yip</h1>
            <p>I'm an aspiring software engineer that loves creating things. 
                I was born and raised in the NYC metro area and I'm currently a
                junior studying computer science at the University of Pennsylvania.
                I'm currently interested in systems programming, web development, and
                machine learning, and I have had the privelege of working in these areas
                in the past. I'm always looking for new opportunities to learn, grow, and connect with others,
                so feel free to reach out to me if any part of this website interests you!
            </p>
        </div>
    </div>
)

export default AboutSection