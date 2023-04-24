import React from "react";
import Navbar from './Navbar';
import img4 from '../images/calendar.svg';
import img5 from '../images/clock-blue.svg';
import Navfile from './Navfile'
export default function Modules() {
    return (
        <div>
            <Navbar />
            <Navfile/>
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