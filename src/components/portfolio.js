import * as React from "react";
import * as styles from "./index.module.css";
import * as cstyles from "./card-gallery.module.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

// const CustomArrow = ({ className, style, onClick, direction }) => {
//     return (
//       <button
//         className={`${className} ${cstyles.customArrow} ${cstyles[direction]}`}
//         style={{ ...style, display: 'block' }}
//         onClick={onClick}
//       >
//         {direction === 'next' ? '>' : '<'}
//       </button>
//     );
// };

const ProjectCard = ({ project }) => {
    return (
        <div className={cstyles.card}>
            <h3 className={cstyles.cardTitle}>{project.name}</h3>
            <p className={cstyles.cardDescription}>{project.description}</p>
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
    return (<div className={styles.narrowContainer}>
        <div className={`${styles.aboutText} ${styles.center}`}>
            <span className={styles.sectionNumber}>03.</span><span className={styles.sectionTitle}>Portfolio</span>
            <p>A collection of things that I've worked on. View all projects [link]. </p>
        </div>
        <ProjectCarousel projects={data} />
    </div>)
}

export default PortfolioSection