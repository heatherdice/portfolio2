/* NavBar comopnent utilizing FadeIn component for fade-in animation & custom useResponsive Hook for responsiveness */
import React from "react";
import { NavLink } from "react-router-dom";
import FadeIn from "react-fade-in";
import "../css/NavBar.css";
import useResponsive from "../hooks/useResponsive";

/* @TODO 9/15/23:
* FadeIn: more gradual, fade up
* hamburger icon: not appearing on top of video
* dropdown menu: create, style (new component)
*/

export default function NavBar() {
    // call useResponsive Hook
    const {mobileScreen, tabletScreen, desktopScreen} = useResponsive();
    // test
    console.log(mobileScreen, tabletScreen, desktopScreen);

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
            {/* FadeIn working, but not well; appears suddenly rather than fading. transitionDuration off? */}
            <FadeIn delay='4000' transitionDuration='5000'>
                <nav className="absolute w-screen h-[10%] top-0 z-40">
                    {desktopScreen ? (
                        <ul className="flex flex-row justify-end font-karla font-semibold text-3xl text-oxford-blue">
                            {/* classes on li not working, except padding? */}
                            {navLinksArray.map((navbar) =>
                                <li className="nav-link cursor-pointer p-5">
                                    <NavLink to={navbar.link}>
                                        {navbar.title}
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    ) : (
                        <ul className="flex justify-end">
                            <li className="cursor-pointer p-5">
                                <i className="fa-solid fa-bars text-3xl text-oxford-blue absolute" />
                            </li>
                        </ul>
                    )}
                    {/* add info here for mobile menu: 
                    {mobileScreen && hamburgerClicked && (
                        dropdown content - maybe do a component here?
                    )} */}
                </nav>
            </FadeIn>
        </>
    );
};