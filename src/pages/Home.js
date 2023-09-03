import React from "react";
import VideoBackground from '../components/VideoBackground';

export default function Home() {
    return (
        <div>
            <div className="z-2 absolute top-0 left-0">
                <h1 className="font-katibeh text-4xl md:text-9xl">Heather Dice</h1>
                <h2>Web Developer</h2>
            </div>
            <VideoBackground />
        </div>
    );
}