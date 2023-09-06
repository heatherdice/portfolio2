import React, { useEffect, useState } from "react";
import VideoBackground from '../components/VideoBackground';
import FadeIn from 'react-fade-in';

// @TODO: organize CSS

export default function Home() {
    // homepage title, subtitle
    const homeText = {
        title: 'Heather Dice',
        subtitle: 'Web Developer'
    };

    // set default state of title & subtitle to false; does not show until following useEffect function
    const [showTitle, setShowTitle] = useState(false);

    // text appears 5 seconds after load
    useEffect(() => {
        setTimeout(() => {
            setShowTitle(true);
        }, 5000);
    }, []);

    return (
        <div className="main">
            <VideoBackground />
            <div className="content">
                {showTitle &&
                    <>
                        <FadeIn>
                            <h1 className="font-katibeh text-4xl md:text-9xl bg-gradient-to-b from-oxford-blue from-2% to-french-gray to-50% text-transparent bg-clip-text mr-10">{homeText.title}</h1>
                            <h2 className="font-karla -mt-10 text-5xl text-oxford-blue mr-10">{homeText.subtitle}</h2>
                        </FadeIn>
                    </>
                }
            </div>
        </div>
    );
}