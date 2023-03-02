// Data
import iconWebsite from "../../../images/icons/worldwide-light.png";
import iconGitHub from "../../../images/icons/github-light.png";

export default function Project({project, year, technologies, affiliation, website, github}) {
    let websiteHtml = "";
    let githubHtml = "";

    // check if there is a website
    if (website) {
        websiteHtml = <a href={website} className="a-icon"><img src={iconWebsite} alt={project} className="icon" /></a>
    }

    // check if there is a GitHub
    if (github) {
        githubHtml = <a href={github} className="a-icon"><img src={iconGitHub} alt={project} className="icon" /></a>
    }

    return (
        <tr>
            <td>{year}</td>
            <td>{project}</td>
            <td className="mobile-optional">{technologies}</td>
            <td className="mobile-optional">{affiliation}</td>
            <td>
                <div className="projectsfull-links">
                    {websiteHtml}
                    {githubHtml}
                </div>
            </td>
        </tr>
    );
}