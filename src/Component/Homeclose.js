import React from "react";
import Navbar from "./Navbar";
import Data from '../images/Data-Analysis.png';
import Dwrang from '../images/Data Wrangling.png';
import tech from '../images/tech.jpeg'
export default function Homeclose() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <h3 className="headcon">Upcoming Certifications</h3>
        <div className="secontent">
          <img src={Data} alt="" height={44} width={44} className="img1" />
          <p className="btn1">  CERTIFICATION    |   ATTEMPT 1 </p>
          <p className="pdata">DATA ANALYSIS <br />CERTIFICATION</p>
          <p className="btn2">COMPLETED  | 21 MAR 2022</p>
          <p className="para1">Exam Structure</p>
          <div className="p2">
            <p className="para2">Round1</p>
            <p className="btn3">MCQS</p>
            <p className="btn4">CODING</p>
          </div>
          <div className="p2">
            <p className="para3">Round2</p>
            <p className="btn5">PROJECT</p>
          </div>
          <button className="btn6">VIEW EXAM DETAILS</button>
        </div>

        <div className="contour">
          <h1 className="head1">Continue Learning</h1>

          <div className="thcontent">
            <img src={Dwrang} alt="" className="data" height={46} width={46} />
            <p className="dpar">DATA WRANGLING & <br />VISUALIZATION</p>
            <img src={tech} className="img7" height={50} width={50} alt="" />
            <p className="secpara">Test Instructor</p>
          </div>
          <div>
            <p className="num1">0/13</p>
            <p className="section1">Live Sessions</p>
            <div className="option1"></div>
            <p className="num1">0/3</p>
            <p className="section1">Assignments</p>
            <div className="option1"></div>
            <p className="num1">0/6</p>
            <p className="section1">MCQ Quiz</p>
            <div className="option1"></div>
          </div>
        </div>
        <div className="secondbox">
          <p className="pt1">Today's Plan</p>
          <p className="pt2">21 March 2022</p>
          <h5 className="ht1">Data Transformation using Pandas-3</h5>
          <p className="pt3">Daily Feedback</p>
          <i className="it1">opens at 7:30 PM</i>
          <p className="bts">JOIN LIVE SESSION</p>
          <p className="pt4">BEGINS AT 7:30 PM</p>

        </div>
        <div className="thirdbox">
          <p className="prg">Progress Overview</p>
          <div className="sub1">
            <p className="grade">0%</p>
            <p className="over">Attendance</p>
            <div className="option2"></div>
          </div>
          <div className="sub2">
            <p className="grade">0%</p>
            <p className="over">Overall Grade</p>
            <div className="option2"></div>
          </div>
          <p className="view">VIEW DETAILED PROGRESS</p>

        </div>
      </div>
    </div>
  )
}