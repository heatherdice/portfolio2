/* Custom hook designed to access the current width of the page in order to make the app more smoothly responsive */
import { useState, useEffect } from "react";

export default function useResponsive() {
    // set default state of screen resolution to false
    const [screenType, setScreenType] = useState({
        mobileScreen: false,
        tabletScreen: false,
        desktopScreen: false
    });

    useEffect(() => {
        // update state whenever user resizes the screen
        function updateWindowWidth() {
            const mobileWidth = window.innerWidth <= 480;
            const tabletWidth = window.innerWidth >= 480 && window.innerWidth <= 750;
            const desktopWidth = window.innerWidth > 750;

            setScreenType({
                mobileScreen: mobileWidth,
                tabletScreen: tabletWidth,
                desktopScreen: desktopWidth
            });
        };

        let timeoutId;

        // debounce (prevent Hook from being called on every miniscule resize as screen is dragged to a new size)
        function handleResize() {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(updateWindowWidth, 150);
        }
        // initial screen size check to apply initial styling
        updateWindowWidth();

        // listen for window resize, call updateWindowWidth
        window.addEventListener("resize", handleResize);

        // remove eventListner to avoid memory leaks, collision of component events
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return screenType
};