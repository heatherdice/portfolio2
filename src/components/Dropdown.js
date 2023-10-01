import React from "react";
import { NavLink } from "react-router-dom";

export default function Dropdown({ props = [] }) {
    return (
        <div className="flex justify-end z-40 my-3 mx-5">
            <ul className="w-1/4 text-right bg-white bg-opacity-25 px-3 py-1 border-2 border-oxford-blue rounded">
                <li className="nav-link cursor-pointer">Test 1</li>
                <li>Test 2</li>
                <li>Test 3</li>
                <li>Test 4</li>
                {/* {props.map((navbar) => 
                    <li className="nav-link cursor-pointer pr-3">
                        <NavLink to={navbar.link}>
                            {navbar.title}
                        </NavLink>
                    </li>
                )} */}
            </ul>
        </div>
    )
}