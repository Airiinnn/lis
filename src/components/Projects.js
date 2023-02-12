import { useInView } from 'react-intersection-observer';
import ProjectFeatured from "./ProjectFeatured";

import "../assets/styles/projects.css"

import iconCube from "../assets/images/icons/cube-light.png"
import { projectsFeatured } from "../data.js";

export default function Projects() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    return (
        <section id="projects" ref={ref}>
            <div className={`section-header ${inView ? "projects-header-1" : "projects-header-0"}`}>
                <h1>Projects</h1>
                <span>
                    <img className="section-cube" src={iconCube} alt="cube" />
                    <img className="section-cube" src={iconCube} alt="cube" />
                </span>
                <p className="p3 center">These are some of the featured projects that I have worked on.</p>
            </div>
            
            <div className="project-list">
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
            
            <div className="view-more">
                <a className="view-more-button-a" href="#projects" >
                    <div className="view-more-button">
                        <p className="p3">View All (soon)</p>
                    </div>
                </a>
            </div>            
        </section>
    );
}