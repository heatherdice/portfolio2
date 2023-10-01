/* Video background that starts onLoad, provides photo background when video is finished playing.
* Currently accessed through App.js but may be isolated to only homepage. */
import React from "react";
import backgroundVideo from "../assets/images/backgroundVideo.mp4";
/* @TODO 9/24/23:
* fix video bg cover in mobile - extends beyond screen to R
*/


export default function VideoBackground() {
    return (
        <div className="w-full h-full fixed overflow-hidden top-0 left-0">
            <video playsInline autoPlay muted poster="background.png" src={backgroundVideo} type="video/mp4" className="w-full h-full object-cover m-0 p-0" />
        </div>
    );
}