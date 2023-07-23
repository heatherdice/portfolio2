import React from "react";
import backgroundVideo from "../assets/images/background.mp4";

export default function Home() {
    return (
        <div className="m-0">
            <div className="relative z-1">
                <h1>Heather Dice</h1>
                <h2>Web Developer</h2>
            </div>

            <video playsInline autoPlay muted poster="background.png" className="fixed -z-1 w-screen h-screen object-cover top-0 left-0" src={backgroundVideo} type="video/mp4" />
        </div>
    );
}