import * as React from "react";
import * as styles from "../components/index.module.css"

const ResumeSection = () => {
    return (
        <div>
            <div className={styles.aboutText}>
                <span className={styles.sectionNumber}>02. </span><span className={styles.sectionTitle}>Resume</span>
]                <p>Here is my resume!</p>
            </div>
            <div className={styles.container}>
                <div className={styles.halfContainer}>div 1</div>
                <div className={styles.halfContainer}>div 2</div>
            </div>
        </div>
    )
}

export default ResumeSection