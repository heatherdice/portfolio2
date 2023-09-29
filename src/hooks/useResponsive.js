/* Custom hook designed to access the current width of the page in order to make the app more smoothly responsive */
import { useState, useEffect } from "react";

export default function useResponsive() {
    // set default state of screen resolution to false
    const [screenType, setScreenType] = useState({
        mobileScreen: false,
        tabletScreen: false,
        desktopScreen: false
    });

    // update state whenever user resizes the screen
    const updateWindowWidth = () => {
        const mobileWidth = window.innerWidth <= 480;
        const tabletWidth = window.innerWidth >= 480 && window.innerWidth <= 750;
        const desktopWidth = window.innerWidth > 750;

        setScreenType({mobileScreen: mobileWidth, tabletScreen: tabletWidth, desktopScreen: desktopWidth});
    };

    // update state on initial load
    useEffect(() => {
        // initial screen size check to apply initial styling
        updateWindowWidth();

        // listen for window resize, call updateWindowWidth
        window.addEventListener("resize", updateWindowWidth);

        // remove eventListner to avoid memory leaks, collision of component events
        return function cleanup() {
            window.removeEventListener("resize", updateWindowWidth);
        };
    }, []);

    return screenType
};