import React from "react";
import VideoBackground from '../components/VideoBackground';

export default function Home() {
    return (
        <div>
            <div className="flex flex-col items-end justify-center h-screen mr-10">
                {/* position: absolute seems required for text overlay, but then text-end doesn't work
                    need to find a way to position text w/in overlay constraints */}
                    <div className="text-end">
                        <h1 className="font-katibeh text-4xl md:text-9xl bg-gradient-to-b from-oxford-blue from-2% to-french-gray to-50% text-transparent bg-clip-text">Heather Dice</h1>
                        <h2 className="font-karla -mt-10 text-5xl text-oxford-blue">Web Developer</h2>
                    </div>
            </div>
            {/* <VideoBackground /> */}
        </div>
    );
}