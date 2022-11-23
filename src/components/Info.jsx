import React from "react";
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import nigel from "../assets/images/nigel.jpg"

export default function Info() {
    return (
        <div className="info-container">
            <img src={nigel} />
            <div className="info-text background-class">
                <h1 className="name-text">Nigel Tay</h1>
                <h3 className="role-text">Frontend Developer</h3>
                <p className="website-text">nigeltay.website</p>
                <div className="button-container">
                    <button className="info-button">
                        <FaEnvelope />
                        <p>Email</p>
                    </button>
                    <button className="info-button linkedin-button">
                        <FaLinkedin />
                        <p>LinkedIn</p>
                    </button>
                </div>
            </div>
        </div>
    )
}