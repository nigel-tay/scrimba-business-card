import React from "react";
import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaGithubSquare } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="footer-container bg-background-black">
            <FaTwitterSquare className="social-icons" />
            <FaFacebookSquare className="social-icons" />
            <FaInstagramSquare className="social-icons" />
            <FaGithubSquare className="social-icons" />
        </div>
    )
}