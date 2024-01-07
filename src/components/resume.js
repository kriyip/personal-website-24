import * as React from "react";
import * as styles from "./index.module.css";
import * as tstyles from "./timeline.module.css"
import * as sstyles from "./sticky.module.css"
import * as tagstyles from "./tags.module.css"

const ResumeSection = ({ data }) => {
    const experiences = data.work;
    const [activeExp, setActiveExp] = React.useState(Object.keys(experiences)[0]);
    const [activeSection, setActiveSection] = React.useState(0);
    const sections = ["SUMMARY", "EDUCATION", "WORK EXPERIENCE"];

    const courses = data.education[0].courses;

    return (
        // use padding on this outer div to make width of section smaller
        <div className={`${styles.narrowContainer}`}>
            <div className={sstyles.container}>
                <div className={sstyles.left}>
                    {/* changed from styles.aboutText */}
                    <div> 
                        <span className={styles.sectionNumber}>02.</span><span className={styles.sectionTitle}>Resume</span>
                    </div>
                    <p>
                    Feel free to contact me for an updated pdf copy of my resume.
                    </p>

                    {Object.keys(sections).map((key) => {
                        return (
                        <div key={key}
                            className={`${styles.lineContainer} ${activeSection === key ? styles.activeSection : ""}`}
                            onClick={() => setActiveSection(key)}>
                                <div className={styles.titleLineLeft}></div><span>{sections[key]}</span>
                        </div>
                    )})}
                </div>

                <div className={sstyles.right}>
                    <div className={sstyles.section}>
                    <h3>SUMMARY</h3>
                    Third-year CS student at UPenn with skills and experience in creating software products using AI & data. I have research and software development experience in an AGILE dynamic environment with a demonstrated ability to work effectively and collaboratively in high pressure situations while handling multiple high priority tasks simultaneously. I am broadly interested in and looking for an internship
involving software development with AI/ML models, cloud infrastructure, and/or systems level programming.

                    </div>

                    <div className={sstyles.section}>
                        <h3>EDUCATION</h3>
                        <div className={styles.flexContainer}>
                            <span className={styles.container60}>
                            <h4>University of Pennsylvania</h4></span>
                            <span className={styles.container40}><h4>Philadelphia, PA</h4></span>
                        </div>

                        <div className={styles.flexContainer}>
                            <span className={styles.container60}>
                            B.S.E Computer Science</span>
                            <span className={styles.container40}>Aug 2021 - May 2025</span>
                        </div>
                        GPA: 3.95 of 4.00
                        <br></br>
                        <h4>Relevant Coursework</h4>
                        <div className={tagstyles.tagContainer}>
                            {/* create a span tag for each course */}
                            {Object.keys(courses).map((key) => (
                                <span className={tagstyles.tag}>
                                    {courses[key]["name"]}
                                </span>
                            ))}
                        </div>

                        <h4>Skills</h4>
                        <div className={styles.hiddenContainer}>
                            <span>Programming Languages</span>
                            Rust, C, Java, Bash
                            Javascript, Typescript
                            Python, SQL, R
                        </div>
                        <div className={styles.hiddenContainer}>
                            <span>Libraries, Frameworks, Tools</span>
                            - data science & machine learning: PyTorch, Huggingface, Pandas, Gensim, NLTK, NumPy, TensorFlow, Scikit-learn, Matplotlib, Seaborn
                            - web development:
                                - frontend: HTML, CSS, ReactJS, ReactTs, Bootstrap, TailwindCSS
                                - backend: node.js, express.js, GraphQL, MongoDB, PostgreSQL, Firebase, gRPC
                            - data processing frameworks: apache spark (pyspark, spark streaming), apache storm, streamparse
                            - cloud: AWS (Sagemaker, DynamoDB, EC2), basic virtualization knowledge (Docker, Kubernetes)
                        </div>
                    </div>

                    <div className={sstyles.section}>
                    <h3>WORK EXPERIENCE</h3>
                    </div>
                </div>
            </div>

            <div className={tstyles.timelineContainer}>
                <div className={tstyles.timelineList}>
                    {Object.keys(experiences).map((key) => (
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