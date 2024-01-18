import * as React from "react";
import * as styles from "./index.module.css";
import * as cstyles from "./card-gallery.module.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const ProjectCard = ({ project }) => {
    return (
        <div className={cstyles.card}>
          <div className={cstyles.date}>
            {project.date}
          </div>
          <div className={styles.flexContainer}>
            {project.hasUrl ? (
              <a href={project.url} className={cstyles.url} target="_blank" rel="noopener noreferrer">
                  <h3 className={cstyles.cardTitle}>{project.name}</h3>
              </a>
            ) : (
              <h3 className={cstyles.cardTitle}>{project.name}</h3>
            )}
          </div>
          <p className={cstyles.cardDescription}>{project.description}</p>

          {!project.hasUrl && (
              <p className={cstyles.noUrlMessage}>
                  Source code is currently private. Contact me for more information.
              </p>
          )}

          <div className={`${cstyles.date} ${cstyles.footer}`}>
            {project.tech.map((tech, index) => (
              <span key={tech}>
                {tech}
                {index < project.tech.length - 1 && ", "}
              </span>
            ))}
          </div>
        </div>
    )
}

const ProjectCarousel = ({ projects }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 items for the 3-column grid
        slidesToScroll: 3, // Scroll over 3 columns at a time?
        rows: 2, // This will create the 2 rows you want
        slidesPerRow: 1,
        responsive: [
          {
            breakpoint: 1024, // You may adjust this breakpoint as needed
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              rows: 2,
              slidesPerRow: 1,
            }
          },
          {
            breakpoint: 768, // You may adjust this breakpoint as needed
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              rows: 2,
              slidesPerRow: 1,
            }
          }
        ],
        // nextArrow: <CustomArrow direction="next" />,
        // prevArrow: <CustomArrow direction="prev" />,
      };
    
    return (
        <Slider {...settings}>
            {projects.map((project) => (
                <ProjectCard project={project} key={project.name} />
            ))}
        </Slider>
    )
}

const PortfolioSection = ({ data }) => {
    return (<div className={styles.narrowContainer} style={{marginBottom: `7rem`}}>
        <div className={`${styles.aboutText} ${styles.center}`} id="portfolio">
            <span className={styles.sectionNumber}>03.</span><span className={styles.sectionTitle}>Portfolio</span>
            <p>A collection of things that I've worked on. View my projects on <a href="https://github.com/kriyip" target="_blank" rel="noopener noreferrer">Github</a>.</p>
        </div>
        <ProjectCarousel projects={data} />
    </div>)
}

export default PortfolioSection