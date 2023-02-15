import { useInView } from 'react-intersection-observer';

import "../assets/styles/aboutme.css"

import iconCube from "../assets/images/icons/cube-light.png"
import iconMail from "../assets/images/icons/mail-light.png";

export default function AboutMe() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    return (
        <section id="aboutme" ref={ref}>
            <div className="content-area">
                <div className={`section-header ${inView ? "aboutme-header-1" : "aboutme-header-0"}`}>
                    <h1>About Me</h1>
                    <img className="section-cube" src={iconCube} alt="cube" />
                    <p className="p3 center">Find out more about me, what I do and my skills related to programming and technology.</p>
                </div>

                <div className="aboutme-container">
                    <div className={`aboutme-left ${inView ? "aboutme-left-1" : "aboutme-left-0"}`}>
                        <p className="p2 primary">Get to know me</p>

                        <p className="desc-text">
                            Hello! My name is <b className="secondary">Alexander Liswandy</b> and I am Computer Science student. I began my programming journey in 2019 during my JC years at Dunman High School, Singapore, taking the H2 Computing subject for GCE A-Level.
                            <br /><br />
                            Over the past 4 years, I have gained a lot of experience in <b className="secondary">Web Development</b>, starting with Web Applications built with <b className="secondary">Flask</b>, <b className="secondary">HTML</b> and <b className="secondary">CSS</b> and transitioning to Apps built with <b className="secondary">JavaScript</b> and popular front-end frameworks like <b className="secondary">React</b>.
                            <br /><br />
                            I am also interested in <b className="secondary">Competitive Programming</b> which probably stems from my love of puzzle games since young. I have dabbled in a few competitions over the years and I intend on translating this current hobby into application performance optimization skills.
                            <br /><br />
                            Currently, I am working on a few projects involving <b className="secondary">Path Finding Algorithms</b>, <b className="secondary">Telegram API</b> and <b className="secondary">Optical Character Recognition</b>. I am planning to explore more into Artificial Intelligence projects in the very near future so stay tuned. :)
                        </p>
                        
                        <div className="contact">
                            <a className="contact-button-a" href="mailto:alex.liswandy@hotmail.com" >
                                <div className="contact-button">
                                    <img src={iconMail} alt="Mail" className="icon" />
                                    <span className="p3 bold contact-text">Contact Me</span>                                
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className={`aboutme-right ${inView ? "aboutme-right-1" : "aboutme-right-0"}`}>
                        <div>
                            <p className="p2 primary">Skills</p>

                            <div className="skills-container">
                                <div className={`skill-box ${inView ? "aboutme-right-1" : "aboutme-right-0"}`}>
                                    <p className="p3 bold">Front End</p>
                                    <p>React, HTML, CSS</p>
                                </div>

                                <div className={`skill-box ${inView ? "aboutme-right-1" : "aboutme-right-0"}`}>
                                    <p className="p3 bold">Back End</p>
                                    <p>JavaScript, Python, C++, Flask, SQL, MongoDB</p>
                                </div>

                                <div className={`skill-box ${inView ? "aboutme-right-1" : "aboutme-right-0"}`}>
                                    <p className="p3 bold">Misc.</p>
                                    <p>Git, Google Maps API, Raspberry Pi, Soldering</p>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <p className="p2 primary">Education</p>

                            <ul className="education-list">
                                <li className="education-li">
                                    <p className="p3 secondary">Dunman High School</p>
                                    <p>A-Level H2 Computing<span className="duration">2019 - 2020</span></p>
                                </li>
                                <li className="education-li">
                                    <p className="p3 secondary">Nanyang Technological University</p>
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