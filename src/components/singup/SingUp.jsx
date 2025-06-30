import React from "react";
import "./SingUp.css"; // Use same CSS
// import Logo from "../singup/Logo.jpeg";
import FarmerImg from "../singup/Farmer.png";
import LadyImg from "../singup/Lady.jpeg";
import transport from '../singup/transport.jpg'
import VideoLogo from "../CompanyLogoVideo/VideoLogo";
import './SingUp'
import { Link } from "react-router-dom";
const SingUp = () => {
    return (

        <div>
            <div className="MainContainerSingUp">
                <div className="applogo" style={{ width: "40%" }}>

                    <VideoLogo />
                </div>

                <div style={{ width: "60%", display: "flex" }}>
                    <div className="mainBoxCard">
                        <div className="secondBoxCard">
                            <div className="SingUpCard1">
                                <h5>SELLER</h5>
                                <img src={FarmerImg} alt="" />
                                <p>  <Link to="/singupfrom" className="singUpButton" href="">Sing Up</Link></p>
                            </div>
                            <div className="SingUpCard1">
                                <h5>BUYER</h5>
                                <img src={LadyImg} alt="" />
                                <p> <Link to="/singupfrom" className="singUpButton" href="">Sing Up</Link></p>
                            </div>
                            <div className="SingUpCard1">
                                <h5>TRANSPORT</h5>
                                <img src={transport} alt="" />
                                <p> <Link to="/singupfrom" className="singUpButton" href="">Sing Up</Link></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingUp;
