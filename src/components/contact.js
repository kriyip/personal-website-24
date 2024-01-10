import * as React from "react";
import * as styles from "./index.module.css";

const ContactSection = ({ data }) => {
    return (
        <div className={styles.narrowContainer} id="contact">
        <div className={`${styles.aboutText} ${styles.center}`}>
            <span className={styles.sectionNumber}>04.</span><span className={styles.sectionTitle}>Contact Me</span>
            <p><br></br>
                Although I'm not currently actively searching for new jobs, I'm always looking for new opportunities to
                learn, grow, and connect with others. If any part of this website interests you, please feel free to
                reach out!
            </p>
            {/* social media bar */}
            <div className={styles.socialMediaBar}>
                <a href="https://www.github.com/kriyip" target="_blank" rel="noreferrer" className={styles.iconLink}>
                    <i className="fab fa-github"></i>
                </a>
                <a href="mailto:kyip@seas.upenn.edu" className={styles.iconLink}>
                    <i className="fas fa-envelope"></i>
                </a>
                <a href="https://www.linkedin.com/in/kristine-yip/" target="_blank" rel="noreferrer" className={styles.iconLink}>
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </div>

    </div>
    )
}

export default ContactSection;