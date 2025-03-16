import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import ecommerce from "../../assets/e-commerce.jpg";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={fitLift}
          link="https://github.com/uzannat86/fitlift"
          h3="FitLift"
          p="Fitness App"
        />

        <ProjectCard
          src={freshBurger}
          link="https://github.com/uzannat86/restaurant"
          h3="Fresh Burger"
          p="Hamburger Restaurant"
        />

        <ProjectCard
          src={viberr}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Viberr"
          p="Streaming App"
        />

        <ProjectCard
          src={ecommerce}
          link="https://github.com/uzannat86/ecommerce"
          h3="Online Store"
          p="E-commerce Website"
        />
      </div>
    </section>
  );
}

export default Projects;
