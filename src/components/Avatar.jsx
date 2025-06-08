import React from 'react';
import './Avatar.css';

export default function Avatar() {
    return (
        <div className="pixel-avatar">
            <div className="avatar-body">
                {/* 这里可替换为像素图片或SVG */}
                <div className="avatar-headset" />
                <div className="avatar-suit" />
                <div className="avatar-face" />
            </div>
            <div className="avatar-icons">
                <div className="icon gamepad" title="游戏项目" />
                <div className="icon code" title="开发项目" />
                <div className="icon art" title="美术项目" />
            </div>
        </div>
    );
} 