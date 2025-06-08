import React, { useState } from 'react';
import './ProjectCarousel.css';

const projects = [
    { title: '像素冒险', img: '/assets/project1.png' },
    { title: '星河代码', img: '/assets/project2.png' },
    { title: '太空画板', img: '/assets/project3.png' },
    { title: '数据银河', img: '/assets/project4.png' },
];

export default function ProjectCarousel() {
    const [active, setActive] = useState(null);
    return (
        <div className="project-carousel">
            {projects.map((p, i) => (
                <div
                    key={p.title}
                    className={`project-card${active === i ? ' active' : ''}`}
                    onClick={() => setActive(i)}
                >
                    <img src={p.img} alt={p.title} className="project-thumb" />
                    <div className="project-title">{p.title}</div>
                </div>
            ))}
            {active !== null && (
                <div className="project-modal" onClick={() => setActive(null)}>
                    <img src={projects[active].img} alt={projects[active].title} />
                    <div className="modal-title">{projects[active].title}</div>
                </div>
            )}
        </div>
    );
} 