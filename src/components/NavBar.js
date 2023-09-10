import React from "react";
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';
import "../css/NavBar.css";

export default function NavBar() {
    return (
        <>
            {/* FadeIn working, but not well; appears suddenly rather than fading. transitionDuration off? */}
            <FadeIn delay='4000' transitionDuration='5000'>
                <nav className="absolute w-screen h-[10%] top-0 font-karla font-medium text-3xl text-oxford-blue">
                    <ul className="flex flex-row justify-end">
                        {/* classes on li's not working, except padding? */}
                        <li className="nav-link cursor-pointer p-5">
                            <Link to='/about'>About</Link>
                        </li>
                        <li className="nav-link cursor-pointer p-5">
                            <Link to='/projects'>Projects</Link>
                        </li>
                        <li className="nav-link cursor-pointer p-5">
                            <Link to='/experience'>Experience</Link>
                        </li>
                        <li className="nav-link cursor-pointer p-5">
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </FadeIn>
        </>
    );
}