// Intersection Observer API
import { useInView } from 'react-intersection-observer';

// Styling
import "../assets/styles/certifications.css"

// Data
import Certification from "./Certification.js"
import iconCube from "../assets/images/icons/cube-light.png"
import { certifications } from "../data.js";

export default function Certifications() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    return (
        <section id="certifications" ref={ref}>
            <div className="content-area">
                <div className={`section-header ${inView ? "certifications-header-1" : "certifications-header-0"}`}>
                    <h1 className="center">Certifications & Courses</h1>
                    <span>               
                        <img className="section-cube" src={iconCube} alt="cube" />
                        <img className="section-cube" src={iconCube} alt="cube" />
                        <img className="section-cube" src={iconCube} alt="cube" />
                    </span>
                    <p className="center">Certifications and courses I have done during my free time.</p>
                </div>

                <div id="certification-card-container">
                    {certifications.map((certification) => (
                        <Certification 
                            key={certification.title}
                            title={certification.title}
                            issuer={certification.issuer}
                            date={certification.date}
                            img={certification.img}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}