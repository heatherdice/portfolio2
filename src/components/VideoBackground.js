import React from "react";
import backgroundVideo from "../assets/images/background.mp4";

export default function VideoBackground() {
    return (
        <div className="relative w-100 h-100">
            <video playsInline autoPlay muted poster="background.png" className="absolute top-0 left-0 w-screen h-screen z-1 object-cover" src={backgroundVideo} type="video/mp4" />
        </div>
    )
}