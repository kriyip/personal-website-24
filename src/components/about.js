import * as React from "react"
import * as styles from "../components/index.module.css"

const AboutSection = () => (
    <div className={styles.container}>
        <div className={`${styles.sideBySide} ${styles.imageContainer}`}>div 1</div>
        <div className={styles.sideBySide}>div 2</div>
    </div>
)

export default AboutSection