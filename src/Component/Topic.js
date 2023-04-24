import React from "react";
import Navbar from "./Navbar";
import Navfile from './Navfile'
import doc from '../images/document.svg';
import topic from '../images/topic.svg';
import video from '../images/videocam.svg';
export default function Topic() {
    return (
        <div>
            <Navbar />
            <Navfile/>
            <div className="content">
                <p className="ass">Python Loops</p>
                <p className="calen">15 December 2021, Wednesday, 7:30pm</p>
                <p className="daily">Daily Feedback</p>
            </div>
            <div className="title">
                <div className="swag">
                    <img src={topic} className="vid" height={15} width={15} alt="" />
                    <p>PRE-WATCH VIDEOS</p>
                </div>
                <div className="swag">
                    <img src={video} height={15} width={15} alt="" className="vid" />
                    <p>SESSION RECORDING</p>
                </div>
                <div className="swag">
                    <img src={doc} height={13} className="vid" width={13} alt="" />
                    <p>REFERENCES</p>
                </div>

            </div>
            <div className="detail">Session Details</div>
            <div className="topbox">
                <h2 className="sess">Session Plan</h2>
                <p className="separa">LIVE session is about to start. Please stay tuned.</p>
                <div className="live">JOIN LIVE SESSION</div>
                <p className="subtopic">Sub-Topics</p>
                <div className="textcont">
                    <p>1.Sorting and Indexing Dataframe</p>
                    <p>2.Filtering Dataframe</p>
                    <p>3.Usage of loc and iloc function</p>
                </div>
                <p className="session">Session Details</p>
            </div>
        </div>
    )
}