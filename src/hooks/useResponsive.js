/* Custom hook designed to access the current width of the page in order to make the app more smoothly responsive */

import React, { useState, useEffect } from "react";

export default function useResponsive() {
    // save local state of window width
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // set screen type to "initial", aka the initial state of the type of screen, as a starting point
    const [screenType, setScreenType] = useState("INITIAL");
    // @TODO: change "INITIAL" to a default value

    useEffect(() => {
        // any time window size changes, run updateWindowDimensions function
        window.addEventListener("resize", updateWindowDimensions);

        // prevents recursive useEffect loop
        return function cleanup() {
            window.removeEventListener("resize", updateWindowDimensions);
        };
    }, [window.innerWidth]); // tells React to listen to any changes in window.innerWidth in eventListener in order to call useEffect Hook

    const updateWindowDimensions = () => {
        // sets screen type depending on screen width
        setWindowWidth(window.innerWidth);
        if (window.innerWidth > 1300) {
            setScreenType("DESKTOP");
        } else if (window.innerWidth <= 1300 && window.innerWidth > 800) {
            setScreenType("TABLET");
        } else {
            setScreenType("MOBILE");
        };
    };

    return { // object shorthand for when key & value are the same
        windowWidth,
        screenType
    };
};