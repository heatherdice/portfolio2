import React from "react";

export default function About() {
    return (
        <div className="grid grid-cols-2">
            <div className="text-2xl">
                This will be where the summary goes.
            </div>
            <div>
                <img className="rounded-md shadow-lg" src="../assets/images/profilepic.jpg" alt="profile picture" />
            </div>
        </div>
    );
};