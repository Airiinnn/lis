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
            <div className="nav-left">
                <a href="#about">
                    <div className="nav-icon">
                        <img src={iconCube} alt="cube" className="icon" />
                        <span className="nav-text bold">lis</span>
                    </div>
                </a>
            </div>
            
            <nav className="nav-middle">
                <ul className="nav-links">
                    <li className="nav-link"><a href="#aboutme">About Me</a></li>
                    <li className="nav-link"><a href="#projects">Projects</a></li>
                    <li className="nav-link"><a href="#achievements">Achievements</a></li>
                    <li className="nav-link"><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            <div className="nav-right">
                <div className="resume">
                    <a className="resume-button-a" href="resume.pdf" >
                        <div className="resume-button">
                            <p>Resume</p>                                
                        </div>
                    </a>
                </div>
            </div>

            <div id="hamburger-icon" className={`${mobileMenuActive ? "open": "closed"}`} onClick={toggleMobileMenu}>
                <div className="bar bar-1"></div>
                <div className="bar bar-2"></div>
                <div className="bar bar-3"></div>

                <ul className={`mobile-menu ${mobileMenuActive ? "nav-list-1": "nav-list-0"}`}>
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