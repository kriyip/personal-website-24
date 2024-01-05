import * as React from "react";
import * as styles from "./index.module.css";
import * as tstyles from "./timeline.module.css"

const ResumeSection = ({ data }) => {
    const experiences = data.work;
    const [activeExp, setActiveExp] = React.useState(Object.keys(experiences)[0]);

    return (
        // use padding on this outer div to make width of section smaller
        <div className={styles.narrowContainer}>
            <div className={styles.aboutText}>
                <span className={styles.sectionNumber}>02. </span><span className={styles.sectionTitle}>Resume</span>
                <p>Here is my resume!</p>
            </div>
            <h1>Education</h1>
            <h2>Experience</h2>
            <div className={tstyles.timelineContainer}>
                <div className={tstyles.timelineList}>
                    {Object.keys(experiences).map((key) => (
                        // <div key={experiences[key].company} className={tstyles.timelineItem}>
                        //     <div className={tstyles.timelineItemContent}>
                        //         <span className={tstyles.timelineItemDate}>{experiences[key].startDate} - {experiences[key].endDate}</span>
                        //         <h3 className={tstyles.timelineItemTitle}>{experiences[key].company}</h3>
                        //         <p className={tstyles.timelineItemDescription}>{experiences[key].position}</p>
                        //     </div>
                        <div key={experiences[key].company}
                            className={`${tstyles.listItem} ${activeExp === key ? tstyles.listItemActive : ""}`}
                            onClick={() => setActiveExp(key)}
                        >
                            {experiences[key].company}
                        </div>
                    ))}
                </div>
                <div className={tstyles.timelineContent}>
                    <h3>{experiences[activeExp].company}</h3>
                    <h4>{experiences[activeExp].position}</h4>
                    <p>{experiences[activeExp].startDate} - {experiences[activeExp].endDate}</p>
                    <p>{experiences[activeExp].summary}</p>
                    <p>{experiences[activeExp].summary}</p>
                    <p>{experiences[activeExp].summary}</p>
                </div>
            </div>
        </div>
    )
}

export default ResumeSection