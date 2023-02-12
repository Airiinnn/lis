import { useInView } from 'react-intersection-observer';

import iconWebsite from "../assets/images/icons/worldwide-light.png"
import iconGitHub from "../assets/images/icons/github-light.png"

export default function ProjectFeatured({index, title, subtitle, website, github, description, tech, img, type}) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0,
    });

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
        // even-indexed project, img on the left
        return (
            <div ref={ref} className={`project-card ${inView ? "projects-left-1" : "projects-left-0"}`}>
                <img className="project-img" src={img} alt={title} />

                <div className="project-text right">
                    <p className="secondary">{type}</p>
                    <p className="p1">{title}</p>
                    <p className="p3">{subtitle}</p>

                    <div className="project-desc desc-right">
                        <p>{description}</p>
                    </div>

                    <p>{tech}</p>

                    <div className="project-links">
                        {websiteHtml}
                        {githubHtml}
                    </div>
                </div>
            </div>
        );
    } else {
        // odd-indexed project, img on the right
        return (
            <div ref={ref} className={`project-card ${inView ? "projects-right-1" : "projects-right-0"}`}>
                <div className="project-text left">
                    <p className="secondary">{type}</p>
                    <p className="p1">{title}</p>
                    <p className="p3">{subtitle}</p>

                    <div className="project-desc desc-left">
                        <p>{description}</p>
                    </div>

                    <p>{tech}</p>

                    <div className="project-links">
                        {websiteHtml}
                        {githubHtml}
                    </div>
                </div>

                <img className="project-img" src={img} alt={title} />
            </div>
        );
    }
}