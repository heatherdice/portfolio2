/* Dropdown component for mobile nav bar.
* Uses NavBar.css for link underline animation. */

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

/* @TODO 11/11/23: 
* different styling (maybe blue w/ gray text)?
* animation
*/

export default function Dropdown({ props }) {
    const [dropdown, setDropdown] = useState(false);

    // close dropdown on resize
    useEffect(() => {
        //handle window resize, close dropdown if open when window size changes
        const handleResize = () => {
            if (dropdown) {
                setDropdown(false);
            }
        };
        // attach event listner
        window.addEventListener('resize', handleResize);

        // cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [dropdown]);

    return (
        <div className="flex justify-end z-40 my-3 mx-5">
            <ul className="w-2/5 text-right text-xl leading-10 bg-white bg-opacity-25 pl-3 py-1  rounded shadow-lg shadow-oxford-blue">
                {props.map((link, index) => (
                    <li key={index} className="nav-link cursor-pointer pr-3">
                        <NavLink to={link.link}>
                            {link.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};