import React from "react";
// import VideoBackground from '../components/VideoBackground';
import FadeIn from 'react-fade-in';
import useResponsive from "../hooks/useResponsive";
/* @TODO 9/15/23:
* find way to center text in mobile - keep title in one line! otherwise color gradient won't work properly
*/

export default function Home() {
    // call useResponsive Hook
    const {mobileScreen} = useResponsive();

    const pageContentStyling = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'end'
    }

    // conditional for responsive text styling
    let responsiveTextStyle; 
    if (mobileScreen) {
        responsiveTextStyle = {
            titleTextStyle : {
                fontSize: '4rem'
            },
            subtitleTextStyle: {
                fontSize: '2rem'
            }
        };
    } else {
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
            <div style={pageContentStyling}>
                <FadeIn delay='2000' transitionDuration='3000'>
                    {/* previously contained classNames text-9xl & mr-10 */}
                    <h1 style={responsiveTextStyle.titleTextStyle} className="font-katibeh bg-gradient-to-b from-oxford-blue from-2% to-french-gray to-50% text-transparent bg-clip-text">Heather Dice</h1>
                </FadeIn>
                <FadeIn delay='3500' transitionDuration='3000'>
                    {/* previously contained classNames text-5xl & mr-10 */}
                    <h2 style={responsiveTextStyle.subtitleTextStyle} className="font-karla -mt-10 text-oxford-blue font-medium">Web Developer</h2>
                </FadeIn>
            </div>
        </div>
    );
};