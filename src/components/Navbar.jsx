import React from 'react';
import './Navbar.css';

const MENU = ['首页', '作品', '关于', '联系'];

export default function Navbar() {
    return (
        <nav className="pixel-navbar">
            <ul>
                {MENU.map((item, idx) => (
                    <li key={item} className="pixel-menu-item">
                        <span>{item}</span>
                        <div className="pixel-firework" />
                    </li>
                ))}
            </ul>
        </nav>
    );
} 