import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Achievements from "./components/Achievements";

export default function App() {
    return (
        <main>
            <Navbar />
            <About />
            <AboutMe />
            <Projects />
            <Achievements />
            <Contact />
        </main>
    );
}