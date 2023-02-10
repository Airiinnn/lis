import ProjectFeatured from "./ProjectFeatured";

import "../assets/styles/projects.css"

import iconCube from "../assets/images/icons/cube-light.png"
import { projectsFeatured } from "../data.js";

export default function Projects() {
    return (
        <section id="projects">
            <div className="section-header">
                <div>
                    <img className="section-cube" src={iconCube} alt="cube" /><span><img className="section-cube" src={iconCube} alt="cube" /></span>
                </div>
                <h1 className="center">Projects</h1>
                <p className="p3 center">Featured and more notable projects</p>
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
        </section>
    );
}