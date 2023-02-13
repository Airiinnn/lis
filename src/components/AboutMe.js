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

                        <p className="desc-text">If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind. The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button. Your chosen number of paragraphs will instantly appear. If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind. The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button. Your chosen number of paragraphs will instantly appear. If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind. The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button. Your chosen number of paragraphs will instantly appear.</p>
                        
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