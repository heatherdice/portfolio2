/* Dropdown component for mobile nav bar.
* Uses NavBar.css for link underline animation. */

import React from "react";
import { NavLink } from "react-router-dom";

/* @TODO 11/11/23: 
* different styling (maybe blue w/ gray text)
* responsive styling
*/

export default function Dropdown({ props }) {
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