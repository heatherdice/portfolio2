import React from "react";
import background from "../assets/images/paintedBackground.png";
import profilePic from "../assets/images/profilepic.jpg";

export default function About() {
    return (
        <div style={{ 
            backgroundImage: `url(${background})`, 
            height: "100vh", 
            backgroundPosition: "center" 
        }}>
            <div className="absolute m-[8%] flex flex-col justify-center items-center font-karla">
                <div className="grid grid-cols-2 gap-5 text-oxford-blue">
                    <div className="text-left">
                        <h1 className="text-7xl leading-loose font-bold">Hey, I'm Heather!</h1>
                        <p className="text-3xl font-semibold">I'm a music teacher-turned fullstack developer from the Philadelphia area with a particular interest in frontend work. I am currently working for Altus Technology Solutions as a junior web developer.</p>
                    </div>
                    <div className="h-[75%] w-[75%] flex justify-center content-center">
                        <img className="rounded-md shadow-lg" src={profilePic} alt="profile picture" />
                    </div>
                </div>
            </div>
        </div>
    );
};