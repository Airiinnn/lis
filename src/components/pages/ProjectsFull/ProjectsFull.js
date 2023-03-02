// Intersection Observer API
import { useInView } from 'react-intersection-observer';

// Styling
import "../../../styles/projectsfull.css";

// Data
import Project from "./Project.js";
import GoToTop from "../../GoToTop.js";
import iconCube from "../../../images/icons/cube-light.png";
import { projectsFull } from "../../../data.js";

export default function ProjectsFull() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    return (
        <div id="projectsfull" ref={ref}>
            <div className="content-area">
                <div className={`section-header ${inView ? "projectsfull-header-1" : "projectsfull-header-0"}`}>
                    <h1 className="center">Projects</h1>
                    <img className="section-cube" src={iconCube} alt="cube" />
                    <p className="center">An archive of my (soon to be) long list of projects.</p>
                    <p className="remark center">Serving Full-Time National Service in 2021 & 2022, hence the lack of projects.</p>
                </div>

                <table id="projectsfull-list" className={inView ? "projectsfull-slide-1" : "projectsfull-slide-0"}>
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Project</th>
                            <th className="mobile-optional">Technologies</th>
                            <th className="mobile-optional">Affiliation</th>
                            <th>Link</th>
                        </tr>
                    </thead>

                    <tbody>
                        {projectsFull.map((project) => (
                            <Project 
                                key={project.project}
                                project={project.project}
                                year={project.year}
                                technologies={project.technologies}
                                affiliation={project.affiliation}
                                website={project.website}
                                github={project.github}
                            />
                        ))}
                    </tbody>
                </table>
            </div>

            <GoToTop />
        </div>
    );
}