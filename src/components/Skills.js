// Swiper.js
import { Navigation, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "../assets/styles/skills.css"

import iconCube from "../assets/images/icons/cube-light.png"
import { skills } from "../data.js";

export default function Skills() {
    return (
        <section id="skills">
            <div className="section-header">
                <img className="section-cube" src={iconCube} alt="cube" />
                <h1 className="center">Skills</h1>
                <p className="p3 center">Languages, frameworks, tools and technical skills I am proficient in...</p>
            </div>

            <div id="skills-list">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={3}
                    navigation={true}
                    loop={true}
                    speed={1000} // 1s transition time
                    autoplay={{
                        delay: 5000, // stays for 5s
                        disableOnInteraction: false,
                    }}
                >
                    {skills.map((skill) => (
                        <SwiperSlide>
                            <div className="skill-card">
                                <img className="icon skill-icon" src={skill.img} alt={skill.name} />
                                <p className="p2">{skill.name}</p>
                                <p>{skill.experience} years of experience</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}