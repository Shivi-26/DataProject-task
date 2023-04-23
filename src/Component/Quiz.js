import React from "react";
import Navbar from './Navbar';
import img1 from '../images/assignment.svg';
import img2 from '../images/activeModuleQuiz.svg';
import img3 from '../images/topic.svg';
import img4 from '../images/calendar.svg';
import img5 from '../images/clock-blue.svg';
import { Link } from "react-router-dom";
export default function Assignment() {
    return (
        <div>
            <Navbar />
            <div className="heading">
            <img src={img3} className="pimg" alt="" height={24} width={24} />
                <li className="python"><Link to="/Topic">
                Python Loops</Link></li>
                <img src={img2} className="pimg" alt="" height={24} width={24} />
                <li className="quz"><Link to="/Quiz">
                Quiz-1:Data Types</Link></li>
                <img src={img1} className="pimg" alt="" height={24} width={24} />
                <li className="asg"><Link to="/Modules">
                     Assignment-1:<p>Operators | Loops</p></Link>
                </li>
            </div>
            <div className="content">

                <p className="ass">Quiz-1:Data Types</p>
                <p className="calen">16 December 2021,Thursday</p>
                <p className="mentor">Quiz Details</p>
                <div className="open">
                    <p className="num5">10</p>
                    <p className="pr3">Questions</p>
                    <p className="num7">-</p>
                    <p className="pr5">Duration</p>
                    <p className="num6">125</p>
                    <p className="pr4">Total Scores</p>
                    <p className="line">|</p>
                </div>
                <div>
                    <p className="star">Start:</p>
                    <img src={img4} className="simg" height={16} width={16} alt="" />
                    <p className="date">16 December 2021</p>
                    <img src={img5} className="cimg" height={16} width={16} alt="" />
                    <p className="time">07:30 PM</p>
                </div>
                <div className="due">
                    <p className="star">Due:</p>
                    <img src={img4} className="simg" height={16} width={16} alt="" />
                    <p className="dat">19 December 2021</p>
                    <img src={img5} className="cmg" height={16} width={16} alt="" />
                    <p className="tim">11:59</p>
                </div>
            </div>

        </div>
    )
}