import React from "react";
import img1 from '../images/activeAssignment.svg';
import img2 from '../images/moduleQuiz.svg';
import img3 from '../images/topic.svg';
import {Link} from 'react-router-dom';
export default function Modules() {
    return (
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
    )
}