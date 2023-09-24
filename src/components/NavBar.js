/* NavBar comopnent utilizing FadeIn component for fade-in animation & custom useResponsive Hook for responsiveness */
import React from "react";
import { NavLink } from "react-router-dom";
import FadeIn from "react-fade-in";
import "../css/NavBar.css";
import useResponsive from "../hooks/useResponsive";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

/* @TODO 9/24/23:
* dropdown menu: create, style (new component)
*/

export default function NavBar() {
    // call useResponsive Hook
    const { desktopScreen } = useResponsive();
    // test
    // console.log(mobileScreen, tabletScreen, desktopScreen);

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
                    <FadeIn delay='5000' transitionDuration='3000'>
                        <div className="flex justify-end text-oxford-blue text-3xl cursor-pointer p-5">
                            <FontAwesomeIcon icon={faBars} className="absolute z-40" />
                        </div>
                    </FadeIn>
                )}
                {/* add info here for mobile menu: 
                {mobileScreen && hamburgerClicked && (
                    dropdown content - maybe do a component here?
                )} */}
            </nav>
        </>
    );
};