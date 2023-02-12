// Swiper.js
import { Navigation, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useInView } from 'react-intersection-observer';

import "../assets/styles/achievements.css"

import iconCube from "../assets/images/icons/cube-light.png"
import { achievements } from "../data.js";

export default function Achievements() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    return (
        <section id="achievements" ref={ref}>
            <div className={`${inView ? "achievements-1" : "achievements-0"}`}>
                <div className="section-header">
                    <h1 className="center">Achievements</h1>
                    <span>               
                        <img className="section-cube" src={iconCube} alt="cube" />
                        <img className="section-cube" src={iconCube} alt="cube" />
                        <img className="section-cube" src={iconCube} alt="cube" />
                    </span>
                    <p className="p3 center">Here are the achievements I have attained and the competitions I have participated in.</p>
                </div>

                <div id="achievements-list">
                    <Swiper
                        style={{
                            "--swiper-navigation-color": "#f1beb0",
                            "--swiper-navigation-size": "25px",
                        }}
                        modules={[Navigation, Autoplay]}
                        slidesPerView={3}
                        navigation={true}
                        loop={true}
                        speed={1000} // 1s transition time
                        autoplay={{
                            delay: 3000, // stays for 3s
                            disableOnInteraction: false,
                        }}
                        effect={"fade"}
                    >   
                        {achievements.map((achievement) => (
                            <SwiperSlide>
                                <div className="achievement-card">
                                    <p className="p2">{achievement.name}</p>
                                    <p>{achievement.award}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}