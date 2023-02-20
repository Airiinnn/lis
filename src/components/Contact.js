// Intersection Observer API
import { useInView } from 'react-intersection-observer';

// Styling
import "../assets/styles/contact.css"

// Data
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
            <div id="contact-container" className={inView ? "contact-1" : "contact-0"}>
                <div className="section-header">
                    <h1>Contact</h1>
                    <img className="section-cube" src={iconCube} alt="cube" />
                    <p className="center">Currently looking for internship / freelance opportunities, but my inbox is always open for anything. Feel free to say hi or ask any questions, I'll do my best to get back to you!</p>
                </div>
                
                <div id="get-in-touch">
                    <h2 className="center">Get in Touch</h2>

                    <div id="contact-list">
                        <a href="mailto:alex.liswandy@hotmail.com" className="contact-item">
                            <img src={iconMail} alt="Mail" className="icon" />
                            <p className="contact-text">alex.liswandy@hotmail.com</p>
                        </a>

                        <a href="https://www.linkedin.com/in/alexanderliswandy/" className="contact-item">
                            <img src={iconLinkedIn} alt="LinkedIn" className="icon" />
                            <p className="contact-text">alexanderliswandy</p>
                        </a>

                        <a href="https://github.com/Airiinnn" className="contact-item">
                            <img src={iconGitHub} alt="GitHub" className="icon" />
                            <p className="contact-text">Airiinnn</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}