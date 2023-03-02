import Main from "./Main.js";
import Navbar from "./components/Navbar.js";
import Contact from "./components/Contact.js";

export default function App() {
    return (
        <div id="app">
            <Navbar />
            <Main />
            <Contact />
        </div>
    );
}