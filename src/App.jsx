import React from 'react';
import Navbar from './components/Navbar';
import PixelBackground from './components/PixelBackground';
import Avatar from './components/Avatar';
import ProjectCarousel from './components/ProjectCarousel';
import SkillsConstellation from './components/SkillsConstellation';
import ContactSatellite from './components/ContactSatellite';
import './styles/main.css';

export default function App() {
    return (
        <div className="pixel-portfolio-root">
            <PixelBackground />
            <Navbar />
            <main className="main-content">
                <section className="center-display">
                    <div className="left-avatar">
                        <Avatar />
                    </div>
                    <div className="right-carousel">
                        <ProjectCarousel />
                    </div>
                </section>
                <aside className="skills-aside">
                    <SkillsConstellation />
                </aside>
                <ContactSatellite />
            </main>
        </div>
    );
} 