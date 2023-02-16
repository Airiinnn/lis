import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Courses from "./components/Courses";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

export default function App() {
    return (
        <main>
            <Navbar />
            <About />
            <AboutMe />
            <Projects />
            <Courses />
            <Achievements />
            <Contact />
        </main>
    );
}