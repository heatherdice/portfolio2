import React from "react";
import profilePic from "../assets/images/profilepic.jpg";

export default function About() {
    return (
        <div className="absolute m-[10%] flex flex-col justify-center items-center">
            <div className="grid grid-cols-2 gap-5">
                <div className="text-2xl">
                    This will be where the summary goes.
                </div>
                <div className="h-[75%] w-[75%] flex">
                    <img className="rounded-md shadow-lg" src={profilePic} alt="profile picture" />
                </div>
            </div>
        </div>
    );
};