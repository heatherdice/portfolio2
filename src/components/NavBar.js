import React from "react";
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';

export default function NavBar() {
    return (
        <>
            <FadeIn delay='5000' transitionDuration='3000'>
                <nav className="font-karla text-3xl text-oxford-blue">
                    <ul>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Experience</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </FadeIn>
        </>
    );
}