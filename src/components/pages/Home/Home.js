import About from "./About";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Certifications from "./Certifications";
import Achievements from "./Achievements";

export default function Home() {
    return (
        <div id="home">
            <About />
            <AboutMe />
            <Projects />
            <Certifications />
            <Achievements />
        </div>
    );
}