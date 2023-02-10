// skill imgs
import skillsJavaScript from "./assets/images/skills/javascript.png";
import skillsPython from "./assets/images/skills/python.png";
import skillsCpp from "./assets/images/skills/cpp.png";
import skillsHtml from "./assets/images/skills/html.png";
import skillsCss from "./assets/images/skills/css.png";
import skillsReact from "./assets/images/skills/react.png";

// project imgs
import projectsLis from "./assets/images/projects/lis.png";
import projectsProjectNavex from "./assets/images/projects/projectnavex.png";

export const skills = [
    {
        name: "JavaScript",
        experience: 3,
        img: skillsJavaScript,
    },

    {
        name: "Python",
        experience: 4,
        img: skillsPython,
    },

    {
        name: "C++",
        experience: 2,
        img: skillsCpp,
    },

    {
        name: "HTML",
        experience: 4,
        img: skillsHtml,
    },

    {
        name: "CSS",
        experience: 4,
        img: skillsCss,
    },

    {
        name: "React",
        experience: 1,
        img: skillsReact,
    },
]

export const projectsFeatured = [
    {
        title: "Project Navex",
        subtitle: "Navigational Data Sheet (NDS) Generator Web Application",
        website: "https://projectnavex.com/",
        github: "https://github.com/projectnavex/project-navex",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
        tech: "JavaScript, HTML, CSS, Google Maps API, EPSG API",
        img: projectsProjectNavex,
        type: "Personal Project",
    },

    {
        title: "lis",
        subtitle: "Personal Programming Portfolio",
        website: "https://alex.lis.fyi/",
        github: "https://github.com/Airiinnn/lis",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
        tech: "React, JavaScript, HTML, CSS, Swiper",
        img: projectsLis,
        type: "Personal Project",
    },

    {
        title: "The Amazing Race",
        subtitle: "Introduction to Computing Web Game",
        website: null,
        github: "https://github.com/Airiinnn/amazing-race",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
        tech: "Python, Flask, SQL, HTML, CSS",
        img: projectsLis,
        type: "BuildingBloCS 2020 Game",
    },
];