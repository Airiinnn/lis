import { useInView } from 'react-intersection-observer';

import "../assets/styles/contact.css"

import iconCube from "../assets/images/icons/cube-light.png"
import iconMail from "../assets/images/icons/mail-light.png"
import iconLinkedIn from "../assets/images/icons/linkedin-light.png"
import iconGitHub from "../assets/images/icons/github-light.png"

export default function Contact() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    return (
        <section id="contact" ref={ref}>
            <div className={`contact-container ${inView ? "contact-1" : "contact-0"}`}>
                <div className="section-header">
                    <h1>Contact</h1>
                    <img className="section-cube" src={iconCube} alt="cube" />
                    <p className="p3 center">Currently looking for internship / freelance opportunities, but my inbox is always open for anything. Feel free to say hi or ask any questions, I'll do my best to get back to you!</p>
                </div>
                
                <div className="get-in-touch">
                    <p className="p2 center">Get in Touch</p>

                    <div className="contact-list">
                        <a href="#contact" className="contact-item">
                            <img src={iconMail} alt="Mail" className="icon" />
                            <span className="p3 contact-text">alex.liswandy@hotmail.com</span>
                        </a>

                        <a href="#contact" className="contact-item">
                            <img src={iconLinkedIn} alt="LinkedIn" className="icon" />
                            <span className="p3 contact-text">https://www.linkedin.com/in/alexanderliswandy/</span>
                        </a>

                        <a href="#contact" className="contact-item">
                            <img src={iconGitHub} alt="GitHub" className="icon" />
                            <span className="p3 contact-text">https://github.com/Airiinnn</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}