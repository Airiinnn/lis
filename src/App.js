import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Events from "./components/Events";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

export default function App() {
    return (
        <main>
            <Navbar />
            <About />
            <AboutMe />
            <Projects />
            <Events />
            <Achievements />
            <Contact />
        </main>
    );
}