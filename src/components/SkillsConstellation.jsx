import React, { useState } from 'react';
import './SkillsConstellation.css';

const skills = [
    { name: 'HTML', color: '#00bfff', percent: 95 },
    { name: 'CSS', color: '#a259ff', percent: 90 },
    { name: 'JS', color: '#ffe066', percent: 88 },
];

export default function SkillsConstellation() {
    const [hover, setHover] = useState(null);
    return (
        <div className="skills-constellation">
            {skills.map((s, i) => (
                <div
                    key={s.name}
                    className="skill-star"
                    style={{ background: s.color }}
                    onMouseEnter={() => setHover(i)}
                    onMouseLeave={() => setHover(null)}
                >
                    <span className="star-label">★</span>
                    {hover === i && (
                        <div className="skill-tooltip">{s.name}: {s.percent}%</div>
                    )}
                </div>
            ))}
        </div>
    );
} 