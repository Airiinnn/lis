// Intersection Observer API
import { useInView } from 'react-intersection-observer';

// Styling
import "../../../styles/aboutme.css"

// Data
import iconCube from "../../../images/icons/cube-light.png"
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
                            Hello! My name is <b className="secondary">Alexander Liswandy</b> and I am Computer Science student. I began my programming journey in 2019 during my JC years at Dunman High School, Singapore, taking the H2 Computing subject for GCE A-Level.
                            <br /><br />
                            Over the past 4 years, I have gained a lot of experience in <b className="secondary">Web Development</b>, starting with Web Applications built with <b className="secondary">Flask</b>, <b className="secondary">HTML</b> and <b className="secondary">CSS</b> and transitioning to Apps built with <b className="secondary">JavaScript</b> and popular front-end frameworks like <b className="secondary">React</b>.
                            <br /><br />
                            I am also interested in <b className="secondary">Competitive Programming</b> which probably stems from my love of puzzle games since young. I have dabbled in a few competitions over the years and I intend on translating this current hobby into application performance optimization skills.
                            <br /><br />
                            Currently, I am working on a few projects involving <b className="secondary">Path Finding Algorithms</b>, <b className="secondary">Telegram API</b> and <b className="secondary">Optical Character Recognition</b>. I am planning to explore more into Artificial Intelligence projects in the very near future so stay tuned. :)
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
                                    <p>React, HTML, CSS</p>
                                </div>

                                <div className={`skill-box ${inView ? "aboutme-right-1" : "aboutme-right-0"}`}>
                                    <p className="bold">Back End</p>
                                    <p>JavaScript, Python, C++, Flask, SQL, MongoDB</p>
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
                                    <p className="secondary">Nanyang Technological University</p>
                                    <p>Bachelor of Engineering in Computer Science with a Second Major in Business<span className="duration">2023 - 2027</span></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}