/* NavBar comopnent utilizing FadeIn component for fade-in animation & custom useResponsive Hook for responsiveness.
* Maps over navLinksArray to supply navbar with links to various pages.
* NavBar.css provides styling for animated elements. */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import FadeIn from "react-fade-in";
import "../css/NavBar.css";
import useResponsive from "../hooks/useResponsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown";

/* @TODO 9/24/23:
* dropdown menu: create, style (new component)
*/

export default function NavBar() {
    // mobile menu open state, initial value set to false
    const [mobileMenu, setMobileMenu] = useState(false);
    
    // function to open mobile menu
    const openMobileMenu = () => {
        setMobileMenu((open) => !open)
    };

    // call useResponsive Hook
    const { desktopScreen } = useResponsive();

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
                {desktopScreen ? (
                    <FadeIn delay='5000' transitionDuration='3000'>
                        <ul className="flex flex-row justify-end font-karla font-semibold text-3xl text-oxford-blue">
                            {navLinksArray.map((navbar) =>
                                <li className="nav-link cursor-pointer p-5">
                                    <NavLink to={navbar.link}>
                                        {navbar.title}
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    </FadeIn>
                ) : (
                    <>
                        <FadeIn delay='5000' transitionDuration='3000'>
                            <div className="flex justify-end text-oxford-blue text-3xl cursor-pointer p-5">
                                <FontAwesomeIcon icon={faBars} className="absolute z-40" type="button" onClick={openMobileMenu} />
                            </div>
                        </FadeIn>
                    </>
                )} 
                {/* toggle mobile/tablet dropdown menu */}
                {!desktopScreen && mobileMenu && (
                    <Dropdown props={navLinksArray} />
                )}
            </nav>
        </>
    );
};