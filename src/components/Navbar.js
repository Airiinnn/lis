import { useState, useEffect } from "react";

import "../assets/styles/navbar.css"

import iconCube from "../assets/images/icons/cube-pink.png"

export default function Navbar() {
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
                <a href="#about">
                    <div id="nav-icon">
                        <img src={iconCube} alt="cube" className="icon" />
                        <span id="nav-text" className="bold">lis</span>
                    </div>
                </a>
            </div>
            
            <nav id="nav-middle">
                <ul id="nav-links">
                    <li className="nav-link"><a href="#aboutme">About Me</a></li>
                    <li className="nav-link"><a href="#projects">Projects</a></li>
                    <li className="nav-link"><a href="#achievements">Achievements</a></li>
                    <li className="nav-link"><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            <div id="nav-right">
                <div className="resume">
                    <a className="resume-button-a" href="resume.pdf" >
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
                    <li><a href="#aboutme">About Me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#achievements">Achievements</a></li>
                    <li><a href="#contact">Contact</a></li>

                    <li className="resume">
                        <a className="resume-button-a" href="resume.pdf" >
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