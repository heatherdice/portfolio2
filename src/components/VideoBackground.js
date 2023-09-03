import React from "react";
import "../css/VideoBackground.css";
import backgroundVideo from "../assets/images/background.mp4";

export default function VideoBackground() {
    return (
        <div className="w-screen h-screen">
            <video playsInline autoPlay muted poster="background.png" src={backgroundVideo} type="video/mp4" />
        </div>
    )
}