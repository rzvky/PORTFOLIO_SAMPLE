import React from 'react';

const Header = () => (
    <header>
        <nav>
            <a href="#home" className="nav-logo">Vicky Kumar</a>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
                {/* This is the new link for your resume */}
                <li>
                    <a 
                        href="/Vicky Kumar Resume.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;