import React from "react";
import ca from "./pic/camera_1060x.webp"
import im from "./img/gal2_600x.webp"
import im1 from "./img/gal3_600x.webp"
import im2 from "./img/gal5_600x.webp"
import im3 from "./img/gal4_770x.webp"
import im4 from "./img/bg-1.webp"
import im5 from "./img/phone-icn.webp"
import im6 from "./img/chat-icn.png"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Content from "./content";
function Same() {
    useEffect(() => {
        AOS.init();
    }, []);
    const navigate = useNavigate();
    return (<>
        <div id="some" className="row"  data-aos="fade-up" >
            <h1>RAISE YOUR EXPECTATIONS</h1>
            <p>REFINED VIEWING EXPERIENCE</p>
            <div className="col-lg-6" data-aos="zoom-in-up">
                <h1>42 FRONT CAMERA FOR PERFECT SHOT</h1>
                <p className="para">Although the pain itself is very important, it will be followed by a doctor,
                    but it happens at such a time that there is a lot of work and pain.
                    For to come to the smallest detail, no one should practice any kind
                    of work unless he derives some benefit from it. Do not be angry with
                    the pain in the reprimand in the pleasure he wants to be a hair from
                    the pain in the hope that there is no breeding. Unless they are blinded by lust,
                    they do not come out, they are in the fault of the official.<br />
                    Let him be a mighty man with a quiver. Elit to be some kind of pure mourning bed of poison. I'm sorry but the cartoon itself is now a truck. As a result,
                    always cartoon for free. He would like to be a monitor.
                </p>
            </div>
            <div className="col-lg-6">
                <div className="img">
                    <img src={ca}></img>
                </div>
            </div>


        </div>
        <div className="row" id="picture"  data-aos="fade-up">
            <div className="col-lg-4">
                <img className="col-lg-2" src={im}></img>
                <img className="col-lg-2" src={im1}></img>
            </div>
            <div className="col-lg-4">

                <img className="col-lg-2" src={im1}></img>
                <img className="col-lg-2" src={im3}></img>
            </div>
            <div className="col-lg-4" id="long">
                <img src={im2}></img>
            </div>

        </div>
        {/* <div id="some0"></div> */}
        <Content />

        <div id="some1" className="row"  data-aos="fade-up">
            <div className="col-lg-6">
                <img className="col-lg-2" src={im4}></img>
            </div>
            <div className="col-lg-6" data-aos="zoom-in-up">
                <h1>NEW GRADIENT COLOR FINISHES</h1>
                <p>

                    Rierem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official.</p>
                <h1>NEW GRADIENT COLOR FINISHES</h1>
                <p>

                    Rierem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official.</p>
                <h1>NEW GRADIENT COLOR FINISHES</h1>
                <p>

                    Rierem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official.</p>


            </div>
        </div>
        <div id="some2" className="row"  data-aos="fade-up">
            <h1>WELCOME TO PHONO SUPPORT. WE'RE HERE TO HELP.</h1>
            <p>ALWAYS ON YOUR SIDE WHEN YOU NEED HELP</p>
            <div className="col-md-6" data-aos="zoom-in-up">

                <div >
                    <img src={im5}></img>
                </div>
                <div><h4>HAVE ANY DOUBTS?</h4>
                    <h1>CALL US NOW</h1>
                    <p> This Number is Toll Free
                        0000 - 123 - 456789</p>
                    <button onClick={() => navigate("/about")}>View More</button>
                </div>
            </div>
            <div className="col-md-6" data-aos="zoom-in-up">
                <div>
                    <img src={im6}></img>
                </div>
                <div>
                    <h4>WANNA TALK TO US?</h4>
                    <h1>LIVE CHAT NOW</h1><p>Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.
                        Duis leo.Lorem </p>
                    <button onClick={() => navigate("/about")}>View More</button></div>
            </div>
        </div>
    </>);
}
export default Same;