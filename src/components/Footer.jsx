import React from "react";
import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaGithubSquare } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="h-16 rounded-t-none rounded-b-2xl flex justify-center bg-background-black">
            <FaTwitterSquare className="h-7 w-7 p-0.5 text-footer-color mx-2" />
            <FaFacebookSquare className="h-7 w-7 p-0.5 text-footer-color mx-2" />
            <FaInstagramSquare className="h-7 w-7 p-0.5 text-footer-color mx-2" />
            <FaGithubSquare className="h-7 w-7 p-0.5 text-footer-color mx-2" />
        </div>
    )
}