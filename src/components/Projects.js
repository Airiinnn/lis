import ProjectFeatured from "./ProjectFeatured";

import "../assets/styles/projects.css"

import iconCube from "../assets/images/icons/cube-light.png"
import { projectsFeatured } from "../data.js";

export default function Projects() {
    return (
        <section id="projects">
            <div className="section-header">
                <div>
                    <span>
                        <img className="section-cube" src={iconCube} alt="cube" />
                        <img className="section-cube" src={iconCube} alt="cube" />
                    </span>
                </div>
                <h1 className="center">Projects</h1>
                <p className="p3 center">Featured and more notable projects</p>
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
                <a className="view-more-button-a" href="/" >
                    <div className="view-more-button">
                        <p className="p2">View All (soon)</p>
                    </div>
                </a>
            </div>            
        </section>
    );
}