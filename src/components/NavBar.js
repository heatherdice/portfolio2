import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import "../css/NavBar.css";
import useResponsive from "../hooks/useResponsive";

export default function NavBar(width, height) {
    // navbar links and titles as objects, put in array to map over for cleaner return code
    const about = {
        link: '/about',
        title: 'About'
    };
    const projects = {
        link: '/projects',
        title: 'Projects'
    };
    const experience = {
        link: '/experience',
        title: 'Experience'
    };
    const contact = {
        link: '/contact',
        title: 'Contact'
    };
    const navLinksArray = [
        about, projects, experience, contact
    ];

    // responsive settings for mobile - good, but do I need to add this to every component that changes depending on mobile screen? What if something just needs to be resized?
    const {screenType} = useResponsive();
    const [mobileView, setMobileView] = useState(false);

    useEffect(() => {
        // test to show current screen type
        console.log(screenType);
        // sets mobileView to true once screen is small enough
        if (screenType === "MOBILE") {
            setMobileView(true);
        };
    }, [screenType]);

    // const screenDimensions = {
    //     width: totalWidth,
    //     height: totalHeight
    // };

    return (
        <>
            {/* FadeIn working, but not well; appears suddenly rather than fading. transitionDuration off? */}
            <FadeIn delay='4000' transitionDuration='5000'>
                <nav className="absolute w-screen h-[10%] top-0">
                    {!mobileView ? (
                        <ul className="flex flex-row justify-end font-karla font-medium text-3xl text-oxford-blue">
                            {/* classes on li's not working, except padding? */}
                            {navLinksArray.map((navbar) =>
                                <li className="nav-link cursor-pointer p-5">
                                    <Link to={navbar.link} >
                                        {navbar.title}
                                    </Link>
                                </li>
                            )}
                        </ul>
                    ) : (
                        <ul className="flex justify-end">
                            <li className="cursor-pointer p-5">
                                <i className="fa-solid fa-bars text-3xl text-oxford-blue" />
                            </li>
                        </ul>
                    )}
                    {/* add info here for mobile menu: 
                    {mobileView && hamburgerClicked && (
                        dropdown content - maybe do a component here?
                    )} */}
                </nav>
            </FadeIn>
        </>
    );
}