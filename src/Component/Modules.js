import React from "react";
import Navbar from './Navbar';
import home from '../images/download.png';
import img1 from '../images/activeAssignment.svg';
import img2 from '../images/moduleQuiz.svg';
import img3 from '../images/topic.svg';
import img4 from '../images/calendar.svg';
import img5 from '../images/clock-blue.svg';
import {Link} from 'react-router-dom';
export default function Modules() {
    return (
        <div>
            <Navbar />
            <div className="heading">
            <img src={img3} className="pimg" alt="" height={24} width={24} />
                <li className="python"><Link to="/Topic">
Python Loops</Link></li>
                <img src={img2} className="pimg" alt="" height={24} width={24} />
                <li className="quiz"><Link to="/Quiz"> Quiz-1:Data Types</Link></li>
                <div className="asdiv">
                    <img src={img1} className="pimg" alt="" height={24} width={24} />
                    <li className="asgn"><Link to="/Modules">Assignment-1:
                        <p className="operat">Operators | Loops</p></Link>
                    </li>
                </div>
            </div>
            <div className="content">
                <p className="ass">Assignment-1:Operators | Loops</p>
                <p className="calen">20 December 2021</p>
                <p className="mentor">Assignment Details</p>
                <div className="">
                    <p className="num2">3</p>
                    <p className="pr1">Problems</p>
                    <p className="num3">100</p>
                    <p className="pr2">Total Scores</p>
                </div>
                <div className="open">
                    <p className="num5">3</p>
                    <p className="pr3">Problems</p>
                    <p className="num6">100</p>
                    <p className="pr4">Total Scores</p>
                    <p className="line">|</p>
                </div>
                <div>
                    <p className="star">Start:</p>
                    <img src={img4} className="simg" height={14} width={14} alt="" />
                    <p className="date">20 December 2021</p>
                    <img src={img5} className="cimg" height={14} width={14} alt="" />
                    <p className="time">07:30 PM</p>
                </div>
                <div className="due">
                    <p className="star">Due:</p>
                    <img src={img4} className="simg" height={14} width={14} alt="" />
                    <p className="dat">26 December 2021</p>
                    <img src={img5} className="cmg" height={14} width={14} alt="" />
                    <p className="tim">11:59</p>
                </div>
            </div>

        </div>
    )
}