import React from "react";
import backgroundVideo from "../assets/images/backgroundVideo.mp4";

export default function VideoBackground() {
    return (
        <div className="w-screen h-screen z-0">
            <video playsInline autoPlay muted poster="background.png" src={backgroundVideo} type="video/mp4" className="w-screen h-screen object-cover" />
        </div>
    );
}