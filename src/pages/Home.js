import React from "react";
// import VideoBackground from '../components/VideoBackground';
import FadeIn from 'react-fade-in';
import useResponsive from "../hooks/useResponsive";
/* @TODO 9/15/23:
* continue homePageTextStyle (rename to responsiveTextStyle?)
* find way to center text in mobile - keep title in one line! otherwise color gradient won't work properly
*/

export default function Home() {
    // call useResponsive Hook
    const {mobileScreen} = useResponsive();

    // conditional for responsive styling
    let homePageTextStyle; 
    if (mobileScreen) {
        homePageTextStyle = {
            titleTextStyle : {
                fontSize: '4rem'
            },
            subtitleTextStyle: {
                fontSize: '2rem'
            }
        };
    } else {
        homePageTextStyle = {
            titleTextStyle : {
                fontSize: '8rem',
                lineHeight: '1',
                marginRight: '3rem'
            },
            subtitleTextStyle: {
                fontSize: '5rem',
                marginRight: '3rem'
            }
        };
    };

    return (
        <div>
            {/* VideoBackground component moved to App.js 9/10, may opt to move back to just home or use as loading screen */}
            {/* <VideoBackground /> */}
            <div className="content">
                <FadeIn delay='2000' transitionDuration='3000'>
                    {/* previously contained classNames text-9xl & mr-10 */}
                    <h1 style={homePageTextStyle.titleTextStyle} className="font-katibeh bg-gradient-to-b from-oxford-blue from-2% to-french-gray to-50% text-transparent bg-clip-text">Heather Dice</h1>
                </FadeIn>
                <FadeIn delay='3500' transitionDuration='3000'>
                    {/* previously contained classNames text-5xl & mr-10 */}
                    <h2 style={homePageTextStyle.subtitleTextStyle} className="font-karla -mt-10 text-oxford-blue">Web Developer</h2>
                </FadeIn>
            </div>
        </div>
    );
};