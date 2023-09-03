import React from "react";
import VideoBackground from '../components/VideoBackground';

// @TODO: organize CSS

export default function Home() {
    return (
        <div className="main">
            <VideoBackground />
            <div className="content">
                <h1 className="font-katibeh text-4xl md:text-9xl bg-gradient-to-b from-oxford-blue from-2% to-french-gray to-50% text-transparent bg-clip-text mr-10">Heather Dice</h1>
                <h2 className="font-karla -mt-10 text-5xl text-oxford-blue mr-10">Web Developer</h2>
            </div>
        </div>
    );
}