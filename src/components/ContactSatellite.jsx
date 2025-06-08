import React, { useState } from 'react';
import './ContactSatellite.css';

export default function ContactSatellite() {
    const [open, setOpen] = useState(false);
    return (
        <div className="contact-satellite">
            <button className="satellite-btn" onClick={() => setOpen(v => !v)}>
                🛰️
            </button>
            {open && (
                <div className="contact-panel">
                    <div>邮箱: your@email.com</div>
                    <div>GitHub: github.com/yourname</div>
                </div>
            )}
        </div>
    );
} 