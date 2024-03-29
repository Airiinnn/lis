// Intersection Observer API
import { useInView } from 'react-intersection-observer';

// Styling
import "../../../styles/aboutme.css";

// Data
import iconCube from "../../../images/icons/cube-light.png";
import iconMail from "../../../images/icons/mail-light.png";

export default function AboutMe() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    return (
        <section id="aboutme" ref={ref}>
            <div className="content-area">
                <div className={`section-header ${inView ? "aboutme-header-1" : "aboutme-header-0"}`}>
                    <h1 className="center">About Me</h1>
                    <img className="section-cube" src={iconCube} alt="cube" />
                    <p className="center">Find out more about me, what I do and my skills related to programming and technology.</p>
                </div>

                <div id="aboutme-container">
                    <div id="aboutme-left" className={inView ? "aboutme-left-1" : "aboutme-left-0"}>
                        <h2 className="primary">Get to know me</h2>

                        <p id="desc-text">
                            Hello! My name is <b className="secondary">Alexander Liswandy</b> and I am a Y1 NUS Computer Science student. I began my programming journey in 2019 during my JC years at Dunman High School, Singapore, taking the H2 Computing subject for GCE A-Level.
                            <br /><br />
                            Throughout the years, I have gained a lot of experience in <b className="secondary">Web Development</b>, starting with Web Applications built with <b className="secondary">Flask</b>, <b className="secondary">HTML</b> and <b className="secondary">CSS</b> and transitioning to Apps built with <b className="secondary">ReactJS</b>.
                            <br /><br />
                            I am also interested in <b className="secondary">Competitive Programming</b> which stems from my love of puzzle games since young. I have dabbled in a few competitions over the years and I intend on translating this current hobby into application performance optimization skills.
                        </p>
                        
                        <div id="aboutme-contact">
                            <a id="contact-button-a" href="mailto:alex.liswandy@hotmail.com" >
                                <div id="contact-button">
                                    <img src={iconMail} alt="Mail" className="icon" />
                                    <p id="contact-text" className="bold">Contact Me</p>                                
                                </div>
                            </a>
                        </div>
                    </div>

                    <div id="aboutme-right" className={inView ? "aboutme-right-1" : "aboutme-right-0"}>
                        <div>
                            <h2 className="primary">Skills</h2>

                            <div id="skills-container">
                                <div className={`skill-box ${inView ? "aboutme-right-1" : "aboutme-right-0"}`}>
                                    <p className="bold">Front End</p>
                                    <p>React, HTML, CSS, GTK</p>
                                </div>

                                <div className={`skill-box ${inView ? "aboutme-right-1" : "aboutme-right-0"}`}>
                                    <p className="bold">Back End</p>
                                    <p>FastAPI, Flask, SQL, MongoDB</p>
                                </div>

                                <div className={`skill-box ${inView ? "aboutme-right-1" : "aboutme-right-0"}`}>
                                    <p className="bold">Languages</p>
                                    <p>TypeScript / JavaScript, Java, Python, Scala, C++</p>
                                </div>

                                <div className={`skill-box ${inView ? "aboutme-right-1" : "aboutme-right-0"}`}>
                                    <p className="bold">Misc.</p>
                                    <p>Git, Google Maps API, Raspberry Pi, Soldering</p>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <h2 className="primary">Education</h2>

                            <ul id="education-list">
                                <li className="education-li">
                                    <p className="secondary">Dunman High School</p>
                                    <p>A-Level H2 Computing<span className="duration">2019 - 2020</span></p>
                                </li>
                                <li className="education-li">
                                    <p className="secondary">National University of Singapore</p>
                                    <p>Bachelor of Computing in Computer Science<span className="duration">2023 - 2027</span></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}