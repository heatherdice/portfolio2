/* NavBar comopnent utilizing FadeIn component for fade-in animation & custom useResponsive Hook for responsiveness.
* Maps over navLinksArray to supply navbar with links to various pages.
* NavBar.css provides styling for animated elements. */
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../css/NavBar.css";
import useResponsive from "../hooks/useResponsive";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown";

/* @TODO 11/25/23:
* find new way to fade in w/ framer-motion
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
            <nav className="absolute top-0 z-40">
                <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 7, duration: 2 }}
                >
                    <div className="flex items-center justify-between w-screen p-5">
                        <div className="flex items-center">
                            <Link to="/">
                                <h1 className="name-style text-6xl mt-3 bg-gradient-to-b from-oxford-blue via-royal-blue to-french-gray from-2% to-50%">HD</h1>
                            </Link>
                        </div>

                        {/* ternary displaying navbar list if desktop screen, hamburger menu if tablet or mobile screen */}
                        {desktopScreen ? (
                            <div className="flex items-center">
                                <ul className="flex flex-row font-karla font-semibold text-3xl text-oxford-blue mb-5 leading-none">
                                    {navLinksArray.map((navbar) =>
                                        <li className="nav-link cursor-pointer px-3" key={navbar.link}>
                                            <NavLink to={navbar.link}>
                                                {navbar.title}
                                            </NavLink>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        ) : (
                            <>
                                <div className="flex justify-end text-oxford-blue text-3xl cursor-pointer p-5">
                                    <FontAwesomeIcon icon={!menuIcon ? faBars : faXmark} className="absolute z-40" type="button" onClick={toggleIcon} />
                                </div>
                            </>
                        )} 
                    </div>
                </motion.div>
                {/* toggle mobile/tablet dropdown menu */}
                {!desktopScreen && menuIcon && (
                    <Dropdown props={navLinksArray} />
                )}
            </nav>
        </>
    );
};