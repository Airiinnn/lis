import "../assets/styles/navbar.css"

import iconCube from "../assets/images/icons/cube-light.png"

export default function Navbar() {
    return (
        <header id="navbar">
            <div className="nav-left">
                <a href="/">
                    <div className="nav-icon">
                        <img src={iconCube} alt="cube" className="icon" />
                        <span className="nav-text bold">lis</span>
                    </div>
                </a>
            </div>
            
            <div className="nav-middle">
                <ul className="nav-links">
                    <li className="nav-link"><a href="#aboutme">About Me</a></li>
                    <li className="nav-link"><a href="#projects">Projects</a></li>
                    <li className="nav-link"><a href="#achievements">Achievements</a></li>
                    <li className="nav-link"><a href="#contact">Contact</a></li>
                </ul>
            </div>

            <div className="nav-right">
                <div className="resume">
                    <a className="resume-button-a" href="resume.pdf" >
                        <div className="resume-button">
                            <p>Resume</p>                                
                        </div>
                    </a>
                </div>
            </div>
        </header>
    );
}