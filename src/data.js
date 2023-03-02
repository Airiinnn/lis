// project imgs
import pLis from "./images/projects/lis.png";
import pProjectNavex from "./images/projects/projectnavex.png";
import pTheAmazingRace from "./images/projects/theamazingrace.png";

// certification imgs
import cUnsupervisedLearningPython from "./images/certifications/unsupervised-learning-python.png";
import cMachineLearningScikitLearn from "./images/certifications/machine-learning-scikit-learn.png";
import cStatisticalThinkingPython1 from "./images/certifications/statistical-thinking-python-1.png";
import cPythonDataScienceToolbox1 from "./images/certifications/python-data-science-toolbox-1.png";
import cIntroSpreadsheets from "./images/certifications/introduction-to-spreadsheets.png";
import cIntroDataScience from "./images/certifications/introduction-to-data-science.png";
import cIntroMongoDB from "./images/certifications/introduction-to-mongodb.png";
import cIntermediateSQL from "./images/certifications/intermediate-sql.png";
import cIntroSQL from "./images/certifications/introduction-to-sql.png";
import cIntermediatePython from "./images/certifications/intermediate-python.png";
import cIntroPython from "./images/certifications/introduction-to-python.png";
import cIntermediateR from "./images/certifications/intermediate-r.png";
import cIntroR from "./images/certifications/introduction-to-r.png";

export const projectsFeatured = [
    {
        title: "Project Navex",
        subtitle: "Navigational Data Sheet (NDS) Generator Web Application",
        website: "https://projectnavex.com/",
        github: "https://github.com/projectnavex/project-navex",
        description: "JavaScript based Web Application that utilises Google Maps and EPSG APIs to automate repetitive manual tasks during NDS creation, reducing time required to create one by up to 75%.",
        tech: "JavaScript, HTML, CSS, APIs",
        img: pProjectNavex,
        type: "Personal Project",
    },

    {
        title: "lis",
        subtitle: "Personal Programming Portfolio",
        website: "https://alex.lis.fyi/",
        github: "https://github.com/Airiinnn/lis",
        description: "Personal porfolio website to consolidate all my programming related projects and achievements. Developed using React, with UIUX considerations in mind.",
        tech: "React, JSX, CSS",
        img: pLis,
        type: "Personal Project",
    },

    {
        title: "The Amazing Race",
        subtitle: "Introduction to Computing Web Game",
        website: null,
        github: "https://github.com/Airiinnn/amazing-race",
        description: "Web-based game made using Flask to introduce basic core programming concepts. Game was premiered at BuildingBloCS 2020's annual student outreach conference.",
        tech: "Python, Flask, SQL, HTML, CSS",
        img: pTheAmazingRace,
        type: "BuildingBloCS 2020 Game",
    },
];

export const certifications = [
    {
        title: "Unsupervised Learning in Python",
        issuer: "DataCamp",
        date: "May 2019",
        img: cUnsupervisedLearningPython,
    },

    {
        title: "Machine Learning with scikit-learn",
        issuer: "DataCamp",
        date: "May 2019",
        img: cMachineLearningScikitLearn,
    },

    {
        title: "Statistical Thinking in Python (Part 1)",
        issuer: "DataCamp",
        date: "May 2019",
        img: cStatisticalThinkingPython1,
    },

    {
        title: "Python Data Science Toolbox (Part 1)",
        issuer: "DataCamp",
        date: "May 2019",
        img: cPythonDataScienceToolbox1,
    },

    {
        title: "Introduction to Spreadsheets",
        issuer: "DataCamp",
        date: "May 2019",
        img: cIntroSpreadsheets,
    },

    {
        title: "Introduction to Data Science in Python",
        issuer: "DataCamp",
        date: "Apr 2019",
        img: cIntroDataScience,
    },

    {
        title: "Introduction to MongoDB in Python",
        issuer: "DataCamp",
        date: "Apr 2019",
        img: cIntroMongoDB,
    },

    {
        title: "Intermediate SQL Queries",
        issuer: "DataCamp",
        date: "Apr 2019",
        img: cIntermediateSQL,
    },

    {
        title: "Introduction to Relational Databases in SQL",
        issuer: "DataCamp",
        date: "Apr 2019",
        img: cIntroSQL,
    },

    {
        title: "Intermediate Python",
        issuer: "DataCamp",
        date: "Apr 2019",
        img: cIntermediatePython,
    },

    {
        title: "Introduction to Python",
        issuer: "DataCamp",
        date: "Apr 2019",
        img: cIntroPython,
    },

    {
        title: "Intermediate R",
        issuer: "DataCamp",
        date: "Apr 2019",
        img: cIntermediateR,
    },

    {
        title: "Introduction to R",
        issuer: "DataCamp",
        date: "Apr 2019",
        img: cIntroR,
    },
]

export const achievements = [
    {
        name: "BuildingBloCS 2020",
        award: "Games Committee Lead",
    },

    {
        name: "FOSSASIA Summit 2020",
        award: "Web Development Workshop Presenter",
    },

    {
        name: "National Olympiad in Informatics, Singapore 2020",
        award: "Bronze Award",
    },

    {
        name: "GovTech GeekOut Bootcamp 2019",
        award: "Second Runner Up",
    },

    {
        name: "Google Code-In 2020",
        award: "Participant",
    },

    {
        name: "Google Kick Start 2020",
        award: "Participant",
    },

    {
        name: "NTU SCSE Computing Challenge 2020",
        award: "Participant",
    },

    {
        name: "Microsoft Imagine Cup Junior 2020",
        award: "Participant",
    },

    {
        name: "DSTA Brainhack Competition 2020",
        award: "Participant",
    },

    {
        name: "SMU WhiteHacks Competition 2020",
        award: "Participant",
    },

    {
        name: "Samsung Solve for Tomorrow 2020",
        award: "Participant",
    },

    {
        name: "FOSSASIA Summit 2019",
        award: "Facilitator & Participant",
    },

    {
        name: "PyCon 2019",
        award: "Facilitator & Participant",
    },

    {
        name: "Hacktoberfest 2019",
        award: "Participant",
    },
]

export const projectsFull = [
    {
        project: "lis - Personal Programming Portfolio",
        year: "2023",
        technologies: "React, JSX, CSS",
        affiliation: "Personal (Solo)",
        website: "https://alex.lis.fyi/",
        github: "https://github.com/Airiinnn/lis",
    },

    {
        project: "Project Navex - NDS Generator",
        year: "2022",
        technologies: "JavaScript, HTML, CSS, APIs",
        affiliation: "Personal (Duo)",
        website: "https://projectnavex.com/",
        github: "https://github.com/projectnavex/project-navex",
    },

    {
        project: "Introduction to Data Science, Basic Statistics Chapter",
        year: "2021",
        technologies: "Kotlin, WordPress, S2",
        affiliation: "NM DEV Internship",
        website: "https://nm.education/courses/introduction-to-data-science/",
        github: null,
    },

    {
        project: "Google Foobar",
        year: "2021",
        technologies: "C++",
        affiliation: "Personal (Solo)",
        website: null,
        github: "https://github.com/Airiinnn/foobar",
    },

    {
        project: "The Amazing Race - Intro to Computing Game",
        year: "2020",
        technologies: "Python, Flask, SQL, HTML, CSS",
        affiliation: "BuildingBloCS 2020",
        website: null,
        github: "https://github.com/Airiinnn/amazing-race",
    },

    {
        project: "Dunman App - School App",
        year: "2020",
        technologies: "Python, Flask, SQL, HTML, CSS",
        affiliation: "Dunman High School",
        website: null,
        github: "https://github.com/Airiinnn/dunmanapp",
    },

    {
        project: "Flask Workshop",
        year: "2020",
        technologies: "Python, Flask, HTML, CSS",
        affiliation: "FOSSASIA 2020",
        website: null,
        github: "https://github.com/Airiinnn/flaskworkshop2020",
    },

    {
        project: "Autonomous Toy Racing Car",
        year: "2019",
        technologies: "Python, Raspberry Pi",
        affiliation: "A-Level Project Work",
        website: null,
        github: null,
    },

    {
        project: "FoodKoala",
        year: "2019",
        technologies: "Python, Flask, SQL, HTML, CSS",
        affiliation: "CXA Hackathon 2019 (Group)",
        website: null,
        github: "https://github.com/Airiinnn/foodkoala",
    },

    {
        project: "To-Do List",
        year: "2019",
        technologies: "Python, Flask, SQL, HTML, CSS",
        affiliation: "Personal (Solo)",
        website: null,
        github: "https://github.com/Airiinnn/todolist",
    },
]