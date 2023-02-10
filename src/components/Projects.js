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
                <p className="p3 center">Programming projects that I have worked on over the years...</p>
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

/*
<div className="project-card">
    <img className="project-img" src={imgLis} alt="lis" />

    <div className="project-text">
        <p className="p1">lis</p>
        <p>Personal Programming Portfolio</p>

        <div className="project-desc">
            <p>If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind.</p>
        </div>

        <p>React, JavaScript, HTML, CSS, Swiper</p>
    </div>
</div>
*/