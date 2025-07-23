import React, { useState } from 'react';
import './Navbar.css'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false); // Close mobile menu after clicking
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="n-wrapper" id="home">
            <div className="n-left">
                <div className="n-name">Nishchal Baluni</div>
                <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            
            <div className={`n-right ${isMenuOpen ? 'active' : ''}`}>
                <div className="n-list">
                    <ul style={{listStyleType: 'none'}}>
                        <li onClick={() => scrollToSection('home')}>Home</li>
                        <li onClick={() => scrollToSection('services')}>Services</li>
                        <li onClick={() => scrollToSection('experience')}>Experience</li>
                        <li onClick={() => scrollToSection('portfolio')}>Portfolio</li>
                        <li onClick={() => scrollToSection('works')}>Works</li>
                    </ul>
                </div>
                <button className="button n-button" onClick={() => scrollToSection('contact')}>
                    Contact 
                </button>
            </div>
        </div>
    )
}
export default Navbar;

