import React from "react";
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';

export default function NavBar() {
    return (
        <>
            <FadeIn delay='5000' transitionDuration='3000'>
                <nav className="absolute w-full h-full top-0 flex flex-row content-center items-end font-karla text-2xl text-oxford-blue">
                    <Link to='/about'>About</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/experience'>Experience</Link>
                    <Link to='/contact'>Contact</Link>
                </nav>
            </FadeIn>
        </>
    );
}