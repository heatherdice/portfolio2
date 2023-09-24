/* Custom hook designed to access the current width of the page in order to make the app more smoothly responsive */
import { useState, useEffect } from "react";

/* @TODO 9/24/23:
* initial state cannot be bool - hook does not read current screen size on load */

export default function useResponsive() {
    // set default state of screen resolution to false
    const [screenType, setScreenType] = useState({
        mobileScreen: false,
        tabletScreen: false,
        desktopScreen: false
    });

    // update state whenever user resizes the screen
    const updateWindowWidth = () => {
        const mobileScreen = window.innerWidth <= 480;
        const tabletScreen = window.innerWidth >= 480 && window.innerWidth <= 750;
        const desktopScreen = window.innerWidth > 750;

        setScreenType({mobileScreen, tabletScreen, desktopScreen});
    };

    // update state on initial load
    useEffect(() => {
        // listen for window resize, call updateWindowWidth
        window.addEventListener("resize", updateWindowWidth);

        // remove eventListner to avoid memory leaks, collision of component events
        return function cleanup() {
            window.removeEventListener("resize", updateWindowWidth);
        };
    }, [window.innerWidth]); // tells React to listen to any changes in window.innerWidth in eventListener in order to call useEffect Hook, rather than running after every render regardless of whether or not window was resized

    return screenType
};