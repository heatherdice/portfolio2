import React from "react";
import backgroundVideo from "../assets/images/background.mp4";

export default function Home() {
    return (
        <div>
            <video autoPlay loop muted className="fixed -z-1 w-full">
                <source src={backgroundVideo} type="video/mp4" />
            </video>
        </div>
    );
}