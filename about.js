import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import abo from "./pic/abo-01.webp"
import abo1 from "./pic/abo-02.webp"
import abo2 from "./pic/abo-03.webp"
import team1 from "./team/inba.jpg"
import team2 from "./team/mcsathish.jpg"
import team3 from "./team/ramasuthan.jpg"
import team4 from "./team/stalin.jpg"
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Foot from "./footer";
function About() {
    useEffect(() => {
        AOS.init();
    }, []);

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (<>
        <div className="abcde">
            <h1>ABOUT US</h1>
            <ul>
                <li><Link to="/home" style={{color:"white"}}>Home</Link><span>/</span> </li>
                <li>About us</li>
            </ul>
        </div>
        <button  className="uparrow"
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
       
      >
      <i class="fa fa-angle-double-up"></i>
      </button>
        <div className="about">
            
            <div className="row" id="row"  data-aos="fade-up">
                <div class='col-lg-6' data-aos="zoom-in-up">
                    <h1>Stylish Mobile Covers</h1>
                    <p>Everyone's life is spent on real estate.
                        There was no expectation that ki diaml ka dhuddu pochu turpis.
                        Suspendisse urn nibh, do not draw, always take up, put a, foot.
                        Until it does not just need to trigger easy fermentation.
                        Who can invest money in the salad? Pellentesque odio nisi,
                        Euismod in, pharetra a, ultricies in, diam. But the bow.
                        Tomorrow results. Even the price is more varied than in some.
                        But for real estate, it was sometimes the course of life.
                        Morbi laoreet sapien that is the epitome. It was a weekend.
                        Now it's time for the pillow. Some of these diseases are caused by diseases.
                        Laughter neither feugiat to put the urn nor tincidunt in ferment.
                        Urn and quiver quiver mass mass mass of my who. Wise people live in a sad old age.
                        For some salad and a tomato recipe</p>
                        
                </div>
                <div className='col-lg-6'>
                    <img src={abo} alt="img" style={{ height: "450px", width: "90%" }} />
                </div>
            </div>
        </div>
        <div className="row about0"  data-aos="fade-up"  id="row" >
            <h2>FITS & PROTECTS YOUR PHONE PERFECTLY</h2>
            <div className='col-md-4'>
                <div>
                    <i className="fa fa-pagelines"></i>
                    <h2>DIGITAL PRINTING</h2>
                    <p>It's important to have a good course. But the real estate of life itself.</p>
                </div>
                <div>
                    <i className="fa fa-user"></i>
                    <h2>LASER CUT</h2>
                    <p>
                        An element of the developer. But there is no police station</p>
                </div>
            </div>
            <div className='col-md-4'>
                <div>
                    <i className="fa fa-tint"></i>
                    <h2>
                        WATERPROOF</h2>
                    <p>There is no element of the creator of the game. It's important</p>
                </div>
                <div>
                   
                    <i className="fa fa-empire"></i>
                    <h2> WEAR-RESISTANT</h2>
                    <p>Neither the concern nor the bureaucracy, who plays the time. But the porch</p>
                </div>
            </div>
            <div className='col-md-4'>
                <div>
                    <i className="fa fa-heart"></i>
                    <h2>SHOCKPROOF</h2>
                    <p>
                        For there is no industry, no concern and neither, no one is interested in time.</p>
                </div>
                <div>
                    <i className="fa fa-magic"></i>
                    <h2>LIGHTWEIGHT</h2>
                    <p>However, there is no factor in the development of the developer. It's important</p>


                </div>
            </div>
        </div>
        <div className="about1"  data-aos="fade-up">
            <div className="row"  id="row">
                <div className='col-lg-6' data-aos="zoom-in-up">
                    <div>
                    <img src={abo1} alt="img" style={{ height: "450px", width: "90%" }} />
                    </div>
                </div>
                <div class='col-lg-6'>
                    <h1>Screen Protection from scratches</h1>
                    <p>However, there is no factor in the development of the developer.
                        It's important to have a good course. But the real estate of life itself.
                        For there is no industry, no concern and neither, no one is interested in time</p>
                </div>

            </div>
        </div>
        <div className="about2"  data-aos="fade-up">
            <div className="row"  id="row">


                <div class='col-lg-6' data-aos="zoom-in-up">
                    <h1>Premium-quality Genuine and PU leather
                    </h1>
                    <p>It's important to have a good course. But the real estate of life itself.
                        For there is no industry, no concern and neither, no one is interested in time. However,
                        there is no factor in the development of the developer.</p>
                </div>
                <div className='col-lg-6'>
                    <div>
                    <img src={abo2} alt="img" style={{ height: "450px", width: "90%" }} />
                </div> </div>

            </div>
        </div>
        <div id="caro" className="row"  data-aos="fade-up">
            <h1>OUR TEAM</h1>
        <div className='col-lg-3'>
            <div>
        <img src={team1} alt="img" />
        <p>Inbaraj</p>
           </div>
        </div>
        <div className='col-lg-3'>
            <div>
        <img src={team2} alt="img" />
        <p>Mcs</p>
           </div>
        </div>
        <div className='col-lg-3'>
            <div>
        <img src={team3} alt="img" />
        <p>Ramasuthan</p>
           </div>
        </div>
        <div className='col-lg-3'>
            <div>
        <img src={team4} alt="img" />
        <p>Stalin</p>
           </div>
        </div>
       
        </div>
        
<Foot/>
    </>);
}
export default About;