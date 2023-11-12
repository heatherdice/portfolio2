/* NavBar comopnent utilizing FadeIn component for fade-in animation & custom useResponsive Hook for responsiveness.
* Maps over navLinksArray to supply navbar with links to various pages.
* NavBar.css provides styling for animated elements. */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import FadeIn from "react-fade-in";
import "../css/NavBar.css";
import useResponsive from "../hooks/useResponsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown";

/* @TODO 11/11/23:
* only fade in when loading for first time
*/

export default function NavBar() {
    // mobile menu open state, initial value set to false
    const [menuIcon, setMenuIcon] = useState(false);
    
    // call useResponsive Hook
    const { desktopScreen } = useResponsive();

    // open/close mobile menu
    const toggleIcon = () => {
        setMenuIcon(prevState => !prevState);
    };
    
    // navbar links & titles as objects, put in array to map over for cleaner return code
    const navLinksArray = [
        {
            link: '/about',
            title: 'About'
        },
        {
            link: '/projects',
            title: 'Projects'
        },
        {
            link: '/experience',
            title: 'Experience'
        },
        {
            link: '/contact',
            title: 'Contact'
        }
    ];

    return (
        <>
            <nav className="absolute w-screen h-[10%] top-0 z-40">
                {/* ternary displaying navbar list if desktop screen, hamburger menu if tablet or mobile screen */}
                <FadeIn delay='5000' transitionDuration='3000'>
                    {desktopScreen ? (
                        <ul className="flex flex-row justify-end font-karla font-semibold text-3xl text-oxford-blue">
                            {navLinksArray.map((navbar) =>
                                <li className="nav-link cursor-pointer p-5">
                                    <NavLink to={navbar.link}>
                                        {navbar.title}
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    ) : (
                        <>
                            <div className="flex justify-end text-oxford-blue text-3xl cursor-pointer p-5">
                                <FontAwesomeIcon icon={!menuIcon ? faBars : faXmark} className="absolute z-40" type="button" onClick={toggleIcon} />
                            </div>
                        </>
                    )} 
                </FadeIn>
                {/* toggle mobile/tablet dropdown menu */}
                {!desktopScreen && menuIcon && (
                    <Dropdown props={navLinksArray} />
                )}
            </nav>
        </>
    );
};