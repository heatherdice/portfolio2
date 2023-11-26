import React from "react";
import VideoBackground from '../components/VideoBackground';
import useResponsive from "../hooks/useResponsive";
import { motion } from "framer-motion";

/** @TODO 11/21/23:
* loading animation
* better mobile layout */

export default function Home() {
    // call useResponsive Hook
    const { mobileScreen, tabletScreen } = useResponsive();

    // variables & conditional for responsive text styling
    let responsivePageContent;
    let responsiveTextStyle;
    // would like to make this dryer somehow - don't like the repetition
    if (mobileScreen || tabletScreen) {
        responsivePageContent = {
            alignItems: 'center',
        };
    };
    if (mobileScreen) {
        responsiveTextStyle = {
            titleTextStyle : {
                fontSize: '4rem',
            },
            subtitleTextStyle: {
                fontSize: '2.5rem'
            }
        };
    } else if (tabletScreen) {
        responsiveTextStyle = {
            titleTextStyle : {
                fontSize: '5.5rem',
            },
            subtitleTextStyle: {
                fontSize: '3rem'
            }
        };
    } else {
        responsivePageContent = {
            alignItems: 'end'
        };
        responsiveTextStyle = {
            titleTextStyle : {
                fontSize: '8rem',
                marginRight: '3rem'
            },
            subtitleTextStyle: {
                fontSize: '4rem',
                marginRight: '3rem'
            }
        };
    };

    return (
        <div>
            {/* VideoBackground component moved to App.js 9/10, may opt to move back to just home or use as loading screen */}
            <VideoBackground />
            <div style={responsivePageContent} className="absolute w-full h-full top-0 flex flex-col justify-center">
                <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 3 }}>
                    <h1 
                    style={responsiveTextStyle.titleTextStyle} 
                    className="name-style bg-gradient-to-b from-oxford-blue via-royal-blue to-french-gray from-2% to-50%">
                        Heather Dice
                    </h1>
                </motion.div>
                <h2 style={responsiveTextStyle.subtitleTextStyle} className="font-karla -mt-10 text-oxford-blue font-medium leading-none">Web Developer</h2>
            </div>
        </div>
    );
};