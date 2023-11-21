import React from "react";
import background from "../assets/images/background.png";
import profilePic from "../assets/images/profilepic.jpg";

export default function About() {
    return (
        <div style={{ backgroundImage: `url(${background})`, height: "100vh", width: "100vh" }}>
            <div className="absolute m-[10%] flex flex-col justify-center items-center font-karla">
                <div className="grid grid-cols-2 gap-5 text-oxford-blue">
                    <div className="text-left">
                        <h1 className="text-7xl leading-loose">Hey, I'm Heather!</h1>
                        <p className="text-2xl">I'm a fullstack developer with a particular interest in frontend work.</p>
                    </div>
                    <div className="h-[75%] w-[75%] flex justify-center content-center">
                        <img className="rounded-md shadow-lg" src={profilePic} alt="profile picture" />
                    </div>
                </div>
            </div>
        </div>
    );
};