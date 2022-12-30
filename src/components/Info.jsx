import React from "react";
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import nigel from "../assets/images/nigel.jpg"

export default function Info() {
    return (
        <div className="info-container flex flex-col">
            <img src={nigel} className="w-full rounded-t-2xl" />
            <div className="flex flex-col items-center bg-background-black">
                <h1 className="mt-5 mb-0 text-2xl font-bold">Nigel Tay</h1>
                <h3 className="mt-1 text-role-green font-normal text-xs">Frontend Developer</h3>
                <p className="mt-5 mb-3 font-normal text-xs">nigeltay.website</p>
                <div className="flex justify-around w-full">
                    <button className="w-32 h-9 rounded-md flex items-center justify-around p-4 border-0 bg-white text-black">
                        <FaEnvelope />
                        <p>Email</p>
                    </button>
                    <button className="w-32 h-9 rounded-md flex items-center justify-around p-4 border-0 bg-linkedin text-white">
                        <FaLinkedin />
                        <p>LinkedIn</p>
                    </button>
                </div>
            </div>
        </div>
    )
}