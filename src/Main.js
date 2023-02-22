import { Routes, Route } from 'react-router-dom';

import Home from "./components/pages/Home/Home.js";
import ProjectsFull from "./components/pages/ProjectsFull/ProjectsFull.js";

export default function Main() {
    return (
        <main>
            <Routes>
                <Route index element={<Home />} />
                <Route path="projects" element={<ProjectsFull />} />
            </Routes>
        </main>
    );
}