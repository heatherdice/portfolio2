import React from "react";
import VideoBackground from '../components/VideoBackground';

export default function Home() {
    return (
        <div>
            <div className="flex flex-col items-end justify-center h-screen mr-10">
                {/* position: absolute seems required for text overlay, but then text-end doesn't work
                    need to find a way to position text w/in overlay constraints */}
                    <div className="text-end">
                        <h1 className="font-katibeh text-4xl md:text-9xl">Heather Dice</h1>
                        <h2 className="font-karla -mt-10 text-5xl">Web Developer</h2>
                    </div>
            </div>
            {/* <VideoBackground /> */}
        </div>
    );
}