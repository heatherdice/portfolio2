import React from "react";
import backgroundVideo from "../assets/images/backgroundVideo.mp4";

export default function VideoBackground() {
    return (
        <div className="w-full h-full fixed overflow-hidden top-0 left-0">
            <video playsInline autoPlay muted poster="background.png" src={backgroundVideo} type="video/mp4" className="w-full h-full object-cover m-0 p-0" />
        </div>
    );
}