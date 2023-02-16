import { useInView } from 'react-intersection-observer';

import "../assets/styles/events.css"

import iconCube from "../assets/images/icons/cube-light.png"

export default function Events() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    return (
        <section id="#events" ref={ref}>
            <div className="content-area">
                <div className={`section-header ${inView ? "events-header-1" : "events-header-0"}`}>
                    <h1>Events & Courses</h1>
                    <span>               
                        <img className="section-cube" src={iconCube} alt="cube" />
                        <img className="section-cube" src={iconCube} alt="cube" />
                        <img className="section-cube" src={iconCube} alt="cube" />
                    </span>
                    <p className="center">I have been a part of these events and completed these courses.</p>
                </div>

                <p className="center">Work in progress. Check back soon</p>
            </div>
        </section>
    )
}