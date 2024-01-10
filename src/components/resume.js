import * as React from "react";
import * as tstyles from "./timeline.module.css"
import * as sstyles from "./sticky.module.css"
import * as tagstyles from "./tags.module.css"
import * as styles from "./index.module.css";

const ResumeSection = ({ data }) => {
    const experiences = data.work;
    // const [activeExp, setActiveExp] = React.useState(Object.keys(experiences)[0]);
    const [activeSection, setActiveSection] = React.useState(0);
    const sections = ["SUMMARY", "EDUCATION", "SKILLS", "WORK EXPERIENCE"];

    const courses = data.education[0].courses;

    const summaryRef = React.useRef(null);
    const educationRef = React.useRef(null);
    const skillsRef = React.useRef(null);
    const workRef = React.useRef(null);

    React.useEffect(() => {
        const handleScroll = () => {
            // Helper function to check if the section is in viewport
            const isInViewport = (elem) => {
                const rect = elem.getBoundingClientRect();
                return rect.top < window.innerHeight && rect.bottom >= 0;
            };
    
            // Find the section that is currently in the viewport
            const sectionsRefs = [summaryRef, educationRef, skillsRef, workRef];
            const activeIndex = sectionsRefs.findIndex((sectionRef) => 
                isInViewport(sectionRef.current)
            );
    
            if (activeIndex !== -1 && activeIndex !== activeSection) {
                setActiveSection(activeIndex);
            }
        };
    
        // Attach the event listener
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activeSection, summaryRef, educationRef, skillsRef, workRef]);

    const smoothScrollToRef = (ref, duration = 1000) => {
        const targetPosition = ref.current.offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;
    
        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const ease = easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, ease);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
    
        const easeInOutQuad = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        requestAnimationFrame(animation);
    };    

    const scrollToSection = (ref) => {
        if (ref && ref.current) {
            smoothScrollToRef(ref, 750);
        }
    };

    return (
        // use padding on this outer div to make width of section smaller
        <div className={`${styles.narrowContainer}`} style={{ paddingTop : `0`}} id="resume">
            <div className={sstyles.container}>
                <div className={sstyles.left}>
                    {/* changed from styles.aboutText */}
                    <div> 
                        <span className={styles.sectionNumber}>02.</span><span className={styles.sectionTitle}>Resume</span>
                    </div>
                    <p style={{ marginTop: `1rem`, marginBottom: `5rem`}}>
                    Feel free to contact me for my pdf resume.
                    </p>

                    {
                    sections.map((section, index) => {
                        return (
                        <div key={index}
                            className={`${styles.lineContainer} ${activeSection === index ? styles.activeSection : ""}`}
                            onClick={() => {
                                setActiveSection(index);
                                scrollToSection([summaryRef, educationRef, skillsRef, workRef][index])
                            }}>
                            <div className={styles.titleLineLeft}></div><span>{section}</span>
                        </div>
                        );
                    })
                    }
                </div>

                <div className={sstyles.right}>
                    <div className={sstyles.section} ref={summaryRef} >
                    <h3>SUMMARY</h3>
                    Third-year CS student at UPenn with skills and experience in creating software products using AI & data. I have research and software development experience in an AGILE dynamic environment with a demonstrated ability to work effectively and collaboratively in high pressure situations while handling multiple high priority tasks simultaneously. I am broadly interested in and looking for an internship
involving software development with AI/ML models, cloud infrastructure, and/or systems level programming.

                    </div>

                    <div className={sstyles.section} ref={educationRef} >
                        <h3>EDUCATION</h3>
                        <div className={styles.flexContainer}>
                            <span className={styles.container60}>
                            <h4>University of Pennsylvania</h4></span>
                            <span className={styles.container40}><h4>Philadelphia, PA</h4></span>
                        </div>

                        <span className={styles.lightText}>
                        <div className={styles.flexContainer}>
                            <span className={styles.container60}>
                            B.S.E Computer Science</span>
                            <span className={styles.container40}>Aug 2021 - May 2025</span>
                        </div>
                        GPA: 3.95 of 4.00</span>
                        <br></br>
                        <h4>Relevant Coursework</h4>
                        <div className={tagstyles.tagContainer}>
                            {/* create a span tag for each course */}
                            {Object.keys(courses).map((key) => (
                                <span className={tagstyles.tag} key={key}>
                                    {courses[key]["name"]}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className={sstyles.section} ref={skillsRef}>
                        <h3>SKILLS</h3>
                        <h4>Programming Languages</h4>
                        <div className={`${tagstyles.tagContainer} ${tagstyles.narrow}`}>
                            <span className={tagstyles.tag}>Rust</span>
                            <span className={tagstyles.tag}>C</span>
                            <span className={tagstyles.tag}>Java</span>
                            <span className={tagstyles.tag}>Bash</span>
                            <span className={tagstyles.tag}>Javascript</span>
                            <span className={tagstyles.tag}>Typescript</span>
                            <span className={tagstyles.tag}>Python</span>
                            <span className={tagstyles.tag}>SQL</span>
                            <span className={tagstyles.tag}>R</span>
                        </div>
                        <br></br>
                        <h4>Libraries, Frameworks, Tools</h4>
                        <ul className={styles.circleBullets}>
                            <li><span className={styles.bold}>Data Science & Machine Learning</span>
                                <br></br>
                                <span className={styles.lightText}>
                                PyTorch, Huggingface, Pandas, Gensim, NLTK, NumPy, TensorFlow, Scikit-learn, Matplotlib, Seaborn
                                </span>
                                </li>
                                
                            <li><span className={styles.bold}>Web Development</span>
                                <ul>
                                    <li>Frontend<br></br>
                                    <span className={`${styles.italic} ${styles.lightText}`}>HTML, CSS, Gatsby, ReactJS, ReactTs, Bootstrap, TailwindCSS</span>
                                    </li>
                                    <li>Backend<br></br>
                                    <span className={`${styles.italic} ${styles.lightText}`}>node.js, express.js, GraphQL, MongoDB, PostgreSQL, Firebase, gRPC</span></li>
                                </ul>
                            </li>

                            <li><span className={styles.bold}>Data Processing Frameworks</span><br></br>
                            <span className={styles.lightText}>Apache Spark (PySpark, Spark Streaming), Apache Storm, Streamparse</span>
                            </li>
                            
                            <li><span className={styles.bold}>Cloud</span><br></br>
                            <span className={styles.lightText}>AWS (Sagemaker, DynamoDB, EC2), Basic virtualization knowledge (Docker, Kubernetes)</span>
                            </li>

                        </ul>
                    </div>

                    <div className={sstyles.section} ref={workRef} >
                    <h3>WORK EXPERIENCE</h3>
                    {Object.keys(experiences).map((key) => (
                        <div className={tstyles.expSection} key={key}>
                            <div className={tstyles.date}>{experiences[key].startDate} - {experiences[key].endDate}</div>
                            <h4>{experiences[key].company}, {experiences[key].position}</h4>
                            <p>{experiences[key].summary}</p>
                        </div>
                    ))}
                    

                    {/* <div className={tstyles.timelineContainer}>
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
                    </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumeSection