// Intersection Observer API
import { useInView } from 'react-intersection-observer';

// React Router
// import { Link } from "react-router-dom";

// Styling
import "../../../styles/projects.css";

// Data
import ProjectFeatured from "./ProjectFeatured";
import iconCube from "../../../images/icons/cube-light.png";
import { projectsFeatured } from "../../../data.js";

export default function Projects() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    return (
        <section id="projects" ref={ref}>
            <div className="content-area">
                <div className={`section-header ${inView ? "projects-header-1" : "projects-header-0"}`}>
                    <h1 className="center">Projects</h1>
                    <span>
                        <img className="section-cube" src={iconCube} alt="cube" />
                        <img className="section-cube" src={iconCube} alt="cube" />
                    </span>
                    <p className="center">These are some of featured projects that I have worked on.</p>
                </div>
                
                <div id="project-list">
                    {projectsFeatured.map((project, index) => (
                        <ProjectFeatured
                            key={project.title}
                            index={index}
                            title={project.title}
                            subtitle={project.subtitle}
                            website={project.website}
                            github={project.github}
                            description={project.description}
                            tech={project.tech}
                            img={project.img}
                            type={project.type}
                        />
                    ))}
                </div>
                
                {/*<div id="view-more" className={inView ? "projects-header-1" : "projects-header-0"}>*/}
                {/*    <Link to="/projects">*/}
                {/*        <div id="view-more-button">*/}
                {/*            <p>View All (soon)</p>*/}
                {/*        </div>*/}
                {/*    </Link>*/}
                {/*</div>*/}
            </div>       
        </section>
    );
}