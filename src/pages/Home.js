import React from "react";
// import VideoBackground from '../components/VideoBackground';
import FadeIn from 'react-fade-in';
import useResponsive from "../hooks/useResponsive";

export default function Home() {
    // call useResponsive Hook
    const { mobileScreen, tabletScreen } = useResponsive();

    // variables & conditional for responsive text styling
    let responsivePageContent;
    let responsiveTextStyle;
    // would like to make this dryer somehow - don't like the repetition
    if (mobileScreen) {
        responsivePageContent = {
            alignItems: 'center'
        };
        responsiveTextStyle = {
            titleTextStyle : {
                fontSize: '4.5rem',
                lineHeight: '1'
            },
            subtitleTextStyle: {
                fontSize: '2.5rem'
            }
        };
    } else if (tabletScreen) {
        responsivePageContent = {
            alignItems: 'center'
        };
        responsiveTextStyle = {
            titleTextStyle : {
                fontSize: '6rem',
                lineHeight: '1'
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
                lineHeight: '1',
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
            {/* <VideoBackground /> */}
            <div style={responsivePageContent} className="absolute w-full h-full top-0 flex flex-col justify-center">
                <FadeIn delay='2000' transitionDuration='3000'>
                    <h1 style={responsiveTextStyle.titleTextStyle} className="font-katibeh bg-gradient-to-b from-oxford-blue via-royal-blue to-french-gray from-2% to-50% text-transparent bg-clip-text">Heather Dice</h1>
                </FadeIn>
                <FadeIn delay='3500' transitionDuration='3000'>
                    <h2 style={responsiveTextStyle.subtitleTextStyle} className="font-karla -mt-10 text-oxford-blue font-medium">Web Developer</h2>
                </FadeIn>
            </div>
        </div>
    );
};