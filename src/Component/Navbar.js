import React from "react";
import tech from '../images/tech.jpeg';
import {Link} from 'react-router-dom';
import home from '../images/download.png';
export default function Navbar() {
    return (
        <div>
            <nav className="nav1">
                <h1 className="head">EDYODA</h1>
                <h6 className="para">Hi Test Learner!</h6>
                <img src={tech} className="img8" height={52} weight={52} alt="" />
            </nav>
            <div className="blu">
                <label className="sechead">DS031221</label>
                <h5 className="dprog">Data Scientist Program</h5>
            </div>

            <div className="nav2">
                <div className="hom1">
                <img src={home} className="img" height={20} width={20} alt="" />
                <li className="home"><Link to="/">
                HOME</Link></li>
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGVtJlc8AdIicMIuh8sgdFIZ3trgZE_aSonA&usqp=CAU" className="img2" height={24} width={24} alt="" />
                <li className="modle"><Link to="/Modules">
                MODULES</Link></li>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQJDEnnVNYD3wOk0PIywPT-2m4UETU7lhOSFBO2HywWPvrH7-g45Eh4Rq9F9WxZTYONKU&usqp=CAU" className="img3" alt="" height={24} width={24} />
                <li className="instruct"><Link to="/Instructor">INSTRUCTORS</Link></li>
            </div>

        </div>
    )
}