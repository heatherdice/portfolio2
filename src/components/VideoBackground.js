/* Video background that starts onLoad, provides photo background when video is finished playing.
* Currently accessed through App.js but may be isolated to only homepage. */
import React from "react";
import backgroundVideo from "../assets/images/backgroundVideo.mp4";
import mobileBackgroundVideo from "../assets/images/mobileBackgroundVideo.mov";
import useResponsive from "../hooks/useResponsive";
/* @TODO 11/27/23:
* change mobileBackgroundVideo to mp4
* still want to find way for more of left side of video to show up on smaller screens
*/

export default function VideoBackground() {
    // call useResponsive Hook
    const { desktopScreen } = useResponsive();

    return (
        <div className="w-full h-full fixed overflow-hidden top-0 left-0">
            {desktopScreen ? (
                <video playsInline autoPlay muted poster="background.png" src={backgroundVideo} type="video/mp4" className="w-full h-full object-cover m-0 p-0" />
            ) : (
                <video playsInline autoPlay muted poster="background.png" src={mobileBackgroundVideo} type="video/mp4" className="w-full h-full object-cover m-0 p-0" />
            )}
        </div>
    );
}