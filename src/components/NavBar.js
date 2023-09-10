import React from "react";
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';

export default function NavBar() {
    return (
        <>
            <FadeIn delay='4500' transitionDuration='3000'>
                <nav className="absolute w-screen h-[10%] top-0 flex flex-row justify-end font-karla font-medium text-2xl text-oxford-blue">
                    <Link to='/about' className="p-5">About</Link>
                    <Link to='/projects' className="p-5">Projects</Link>
                    <Link to='/experience' className="p-5">Experience</Link>
                    <Link to='/contact' className="p-5">Contact</Link>
                </nav>
            </FadeIn>
        </>
    );
}