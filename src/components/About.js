import { useEffect } from "react";

import "../assets/styles/about.css"

import iconGitHub from "../assets/images/icons/github-light.png";
import iconLinkedIn from "../assets/images/icons/linkedin-light.png";
import iconMail from "../assets/images/icons/mail-light.png";
import imgAboutMe from "../assets/images/about-me.png";

export default function About() {
    useEffect(() => {
        // * SPINNING SQUARE
        // constants
        const COLOR_BG = "#7cc1ac";
        const COLOR_CUBE = "#ffffff";
        const SPEED_X = 0.05; // rps
        const SPEED_Y = 0.15; // rps
        const SPEED_Z = 0.10; // rps
        const POINT3D = function(x, y, z) { this.x = x; this.y = y; this.z = z; };

        // set up the canvas and context
        var canvas = document.getElementById("cube");
        var ctx = canvas.getContext("2d");

        // dimensions
        var h = 320;
        var w = 320;
        canvas.height = h;
        canvas.width = w;

        // colours and lines
        ctx.fillStyle = COLOR_BG;
        ctx.strokeStyle = COLOR_CUBE;
        ctx.lineWidth = w / 100;
        ctx.lineCap = "round";

        // cube parameters
        var cx = w / 2;
        var cy = h / 2;
        var cz = 0;
        var size = h / 4;
        var vertices = [
            new POINT3D(cx - size, cy - size, cz - size),
            new POINT3D(cx + size, cy - size, cz - size),
            new POINT3D(cx + size, cy + size, cz - size),
            new POINT3D(cx - size, cy + size, cz - size),
            new POINT3D(cx - size, cy - size, cz + size),
            new POINT3D(cx + size, cy - size, cz + size),
            new POINT3D(cx + size, cy + size, cz + size),
            new POINT3D(cx - size, cy + size, cz + size)
        ];
        var edges = [
            [0, 1], [1, 2], [2, 3], [3, 0], // back face
            [4, 5], [5, 6], [6, 7], [7, 4], // front face
            [0, 4], [1, 5], [2, 6], [3, 7] // connecting sides
        ];

        // set up the animation loop
        var timeDelta, timeLast = 0;
        requestAnimationFrame(loop);

        function loop(timeNow) {

            // calculate the time difference
            timeDelta = timeNow - timeLast;
            timeLast = timeNow;

            // background
            ctx.fillRect(0, 0, w, h);

            // rotate the cube along the z axis
            let angle = timeDelta * 0.001 * SPEED_Z * Math.PI * 2;
            for (let v of vertices) {
                let dx = v.x - cx;
                let dy = v.y - cy;
                let x = dx * Math.cos(angle) - dy * Math.sin(angle);
                let y = dx * Math.sin(angle) + dy * Math.cos(angle);
                v.x = x + cx;
                v.y = y + cy;
            }

            // rotate the cube along the x axis
            angle = timeDelta * 0.001 * SPEED_X * Math.PI * 2;
            for (let v of vertices) {
                let dy = v.y - cy;
                let dz = v.z - cz;
                let y = dy * Math.cos(angle) - dz * Math.sin(angle);
                let z = dy * Math.sin(angle) + dz * Math.cos(angle);
                v.y = y + cy;
                v.z = z + cz;
            }

            // rotate the cube along the y axis
            angle = timeDelta * 0.001 * SPEED_Y * Math.PI * 2;
            for (let v of vertices) {
                let dx = v.x - cx;
                let dz = v.z - cz;
                let x = dz * Math.sin(angle) + dx * Math.cos(angle);
                let z = dz * Math.cos(angle) - dx * Math.sin(angle);
                v.x = x + cx;
                v.z = z + cz;
            }

            // draw each edge
            for (let edge of edges) {
                ctx.beginPath();
                ctx.moveTo(vertices[edge[0]].x, vertices[edge[0]].y);
                ctx.lineTo(vertices[edge[1]].x, vertices[edge[1]].y);
                ctx.stroke();
            }

            // call the next frame
            requestAnimationFrame(loop);
        }

        // * TYPING SIMULATION LOOP
        // settings 
        const items = ['Computer Science Student', 'Web Developer', 'Motivated Self-Learner'];
        const delSpeed = 50;
        const typeSpeed = 100;

        let index = 0;
        let charIndex = 0;

        function typing() {
            if (index === items.length) { // loop back
                index = 0;
                setTimeout(typing, typeSpeed);
            } else if (charIndex >= items[index].length + 1) { // finished typing
                setTimeout(deleteTxt, delSpeed);
            } else if (charIndex < items[index].length + 1) { // continue typing
                const addChar = items[index].substring(-items[index].length, charIndex);
                document.getElementById("roles").innerHTML = addChar;
                charIndex += 1;
                setTimeout(typing, typeSpeed); 
            }
        };

        function deleteTxt() {
            if (charIndex >= 0) { // continue deleting
                const delChar = items[index].substring(-items[index].length, charIndex);
                document.getElementById("roles").innerHTML = delChar;
                charIndex -= 1;
                setTimeout(deleteTxt, delSpeed); 
            } else if (index <= items.length -1) { // next word
                index += 1;
                typing();
            } else { // send to typing to loop back
                typing();
            }
        }; 

        typing();
    }, []);

    return (
        <section id="about">
            <div id="about-left">
                <div id="text-canvas-overlay">
                    <canvas id="cube"></canvas>
                    <p id="hi-overlay">lis</p>
                </div>

                <div id="about-desc">
                    <p>Hi! I am</p>
                    <p className="p1">Alexander Liswandy</p>
                    <p className="p2"><span id="roles"></span><span className="line-blink"></span></p>
                    <p className="p3 short-desc">Passionate and self-driven programming & tech enthusiast. Started coding in 2019. Experience in Full Stack Web Development and Competitive Programming Algorithms. Currently exploring Path Finding Algorithms and Computer Vision. Looking to gain knowledge and experience in DevOps and ML.</p>
                    <div id="links">
                        <a href="https://github.com/Airiinnn" className="a-icon"><img src={iconGitHub} alt="GitHub" className="icon" /></a>
                        <a href="https://www.linkedin.com/in/alexanderliswandy/" className="a-icon"><img src={iconLinkedIn} alt="LinkedIn" className="icon" /></a>
                        <a href="mailto:alex.liswandy@hotmail.com" className="a-icon"><img src={iconMail} alt="Mail" className="icon" /></a>
                    </div>
                </div>
            </div>

            <div id="about-right">
                <img src={imgAboutMe} alt="About Me"/>
            </div>

            <script src="/src/cube.js"></script>
        </section>
    );
}