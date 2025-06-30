import React from 'react'
import KrushiCounter from '../counter/KrushiCounter'
import './KrushiHome.css'
export default function KrushiHome() {
    return (
        <div>
            <div className="about-page">
                <div className="about-container">
                    <h1 className="about-title">🌾 About Krushi Mart</h1>
                    <p className="about-text">
                        <strong>Krushi Mart</strong> is a dedicated platform built to empower Indian farmers and support rural communities. Our mission is to help farmers easily buy quality food, seeds, tools, and agricultural products at fair prices — directly from trusted sources.
                    </p>
                    <ul className="about-list">
                        <li>✅ Easy access to farming essentials</li>
                        <li>✅ Affordable prices for food and goods</li>
                        <li>✅ Direct support for rural farmers</li>
                        <li>✅ A simple online experience in local languages</li>
                    </ul>
                    <p className="about-text">
                        Our goal is to build a bridge between farmers and reliable markets. At <strong>Krushi Mart</strong>, we believe when farmers grow, the nation grows.
                    </p>
                </div>
            </div>
            <div>
                <KrushiCounter />
            </div>
        </div>
    )
}
