import "../assets/styles/projects.css"
import { projects } from "../data.js";
import imgProjectNavex from "../assets/images/projects/projectnavex.png";
import iconWebsite from "../assets/images/icons/worldwide-light.png"
import iconGitHub from "../assets/images/icons/github-light.png"

function Project({index, title, subtitle, website, github, description, tech, img}) {
    let websiteHtml = "";
    let githubHtml = "";

    // check if there is a website
    if (website) {
        websiteHtml = <a href={website} className="a-icon"><img src={iconWebsite} alt={title} className="icon" /></a>
    }

    // check if there is a GitHub
    if (github) {
        githubHtml = <a href={github} className="a-icon"><img src={iconGitHub} alt={title} className="icon" /></a>
    }

    if (index % 2 === 0) {
        // even-indexed project, img on the right
        return (
            <div className="project-card">
                <div className="project-desc">
                    <p className="p1 primary">{title}</p>
                    <p className="p2">{subtitle}</p>
                    <div className="project-links">
                        {websiteHtml}
                        {githubHtml}
                    </div>
                    <p className="p3">{description}</p>
                    <p className="tech-used">Technologies used: <span className="primary">{tech}</span></p>
                </div>
                
                <img className="project-preview img-left" src={img} alt={title} />
            </div>
        )
    } else {
        // odd-indexed project, img on the left
        return (
            <div className="project-card">
                <img className="project-preview img-right" src={imgProjectNavex} alt={title} />
                
                <div className="project-desc">
                    <p className="p1">{title}</p>
                    <p className="p2">{subtitle}</p>
                    <div className="project-links">
                        {websiteHtml}
                        {githubHtml}
                    </div>
                    <p className="p3">{description}</p>

                    <p className="tech-used">Technologies used: <span className="primary">{tech}</span></p>
                </div>
            </div>
        )
    }
}

export default function Projects() {
    return (
        <section id="projects">
            <h1 className="center">Projects</h1>
            <p className="p3 center">Programming projects that I have worked on over the years...</p>
            
            <div id="project-list">
                {projects.map((project, index) => (
                    <Project
                        key={project.title}
                        index={index}
                        title={project.title}
                        subtitle={project.subtitle}
                        website={project.website}
                        github={project.github}
                        description={project.description}
                        tech={project.tech}
                        img={project.img}
                    />
                ))}
            </div>
        </section>
    );
}