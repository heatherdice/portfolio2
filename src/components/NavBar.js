import React from "react";
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';

export default function NavBar() {
    return (
        <>
            <FadeIn delay='5000' transitionDuration='3000'>
                <nav className="flex flex-row items-end space-between font-karla text-3xl text-oxford-blue">
                    <Link to='/about'>About</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/experience'>Experience</Link>
                    <Link to='/contact'>Contact</Link>
                </nav>
            </FadeIn>
        </>
    );
}