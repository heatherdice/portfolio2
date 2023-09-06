import React from "react";
import VideoBackground from '../components/VideoBackground';
import FadeIn from 'react-fade-in';

// @TODO: organize CSS

export default function Home() {
    // homepage title, subtitle
    const homeText = {
        title: 'Heather Dice',
        subtitle: 'Web Developer'
    };

    return (
        <div className="main">
            <VideoBackground />
            <div className="content">
                <FadeIn delay='2000' transitionDuration='3000'>
                    <h1 className="font-katibeh text-4xl md:text-9xl bg-gradient-to-b from-oxford-blue from-2% to-french-gray to-50% text-transparent bg-clip-text mr-10">{homeText.title}</h1>
                </FadeIn>
                <FadeIn delay='3500' transitionDuration='3000'>
                    <h2 className="font-karla -mt-10 text-5xl text-oxford-blue mr-10">{homeText.subtitle}</h2>
                </FadeIn>
            </div>
        </div>
    );
}