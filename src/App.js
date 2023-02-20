import Navbar from "./components/Navbar";
import About from "./components/About";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

export default function App() {
    return (
        <main>
            <Navbar />
            <About />
            <AboutMe />
            <Projects />
            <Certifications />
            <Achievements />
            <Contact />
        </main>
    );
}