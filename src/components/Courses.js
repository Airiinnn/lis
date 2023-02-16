import { useInView } from 'react-intersection-observer';

import "../assets/styles/courses.css"

import iconCube from "../assets/images/icons/cube-light.png"

export default function Courses() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    return (
        <section id="#courses" ref={ref}>
            <div className="content-area">
                <div className={`section-header ${inView ? "courses-header-1" : "courses-header-0"}`}>
                    <h1>Courses</h1>
                    <span>               
                        <img className="section-cube" src={iconCube} alt="cube" />
                        <img className="section-cube" src={iconCube} alt="cube" />
                        <img className="section-cube" src={iconCube} alt="cube" />
                    </span>
                    <p className="center">I have completed these courses.</p>
                </div>

                <p className="center">Collating and adding to data.js. Check back soon</p>
            </div>
        </section>
    )
}