// React library
import { useState, useEffect } from "react";

// React Router
import { HashLink as Link } from 'react-router-hash-link';

// Styling
import "../styles/navbar.css"

// Data
import iconCube from "../images/icons/cube-pink.png"

export default function Navbar() {
    // Mobile navbar
    const [mobileMenuActive, setMobileMenuActive] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuActive(current => !current);
    }

    useEffect(() => {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "0";
            } else {
                document.getElementById("navbar").style.top = "-64px";
            }
            prevScrollpos = currentScrollPos;
        }
    }, []);

    return (
        <header id="navbar">
            <div id="nav-left">
                <Link to="/#about">
                    <div id="nav-icon">
                        <img src={iconCube} alt="cube" className="icon" />
                        <span id="nav-text" className="bold">lis</span>
                    </div>
                </Link>
            </div>
            
            <nav id="nav-middle">
                <ul id="nav-links">
                    <li className="nav-link"><Link to="/#aboutme">About Me</Link></li>
                    <li className="nav-link"><Link to="/#projects">Projects</Link></li>
                    <li className="nav-link"><Link to="/#certifications">Certifications</Link></li>
                    <li className="nav-link"><Link to="/#achievements">Achievements</Link></li>
                    <li className="nav-link"><Link to="/#contact">Contact</Link></li>
                </ul>
            </nav>

            <div id="nav-right">
                <div className="resume">
                    <a className="resume-button-a" href="/resume.pdf" >
                        <div className="resume-button">
                            <p>Resume</p>                                
                        </div>
                    </a>
                </div>
            </div>

            <div id="hamburger-icon" className={`${mobileMenuActive ? "open": "closed"}`} onClick={toggleMobileMenu}>
                <div id="bar-1" className="bar"></div>
                <div id="bar-2" className="bar"></div>
                <div id="bar-3" className="bar"></div>

                <ul id="mobile-menu" className={mobileMenuActive ? "nav-list-1": "nav-list-0"}>
                    <li><Link to="/#aboutme">About Me</Link></li>
                    <li><Link to="/#projects">Projects</Link></li>
                    <li><Link to="/#certifications">Certifications</Link></li>
                    <li><Link to="/#achievements">Achievements</Link></li>
                    <li><Link to="/#contact">Contact</Link></li>

                    <li className="resume">
                        <a className="resume-button-a" href="/resume.pdf" >
                            <div className="resume-button">
                                <p>Resume</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}