import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import pic1 from "./image/phono-slider-1.webp"
import pic2 from "./image/phono-slider-2.webp"
import pic3 from "./image/phono-slider-3.webp"
import pic4 from "./image/phono-slider-1.webp"
import { useNavigate } from "react-router-dom";
function Slide() {
  const navigate = useNavigate();
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
  return (
    <>
      <Carousel responsive={responsive}
        showDots={true}
        autoPlay={true}
        autoPlaySpeed={1000}>
        {/* // swipeable={false}
  // draggable={false}
  // showDots={true}
  // responsive={responsive}
  // ssr={true} // means to render carousel on server-side.
  // infinite={true}
  // // autoPlay={this.props.deviceType !== "mobile" ? true : false}
  // autoPlaySpeed={1000}
  // keyBoardControl={true}
  // customTransition="all .5"
  // transitionDuration={500}
  // containerClass="carousel-container"
  // removeArrowOnDeviceType={["tablet", "mobile"]}
  // // deviceType={this.props.deviceType}
  // dotListClass="custom-dot-list-style"
  // itemClass="carousel-item-padding-40-px" */}

        {/* <div className="pic"> */}
        <div > <img src={pic1} alt="g" ></img>
          <div className="legend" id='legen'>
            <h2>ZANIA BLACK EDITION</h2>
            <h1>CURVY BEVEL<br />
              DUAL AUDIO</h1>
            <button className="btn btn-danger" onClick={() => navigate("/shop")}>Shop Now</button></div>
        </div>
        <div > <img src={pic2} alt="g" ></img>
          <div className="legend " id='legen1'>     
          <h2>4k RESOLUTION</h2>
            <h1>EXCLUSIVE STEEL FRAME</h1>
            <button className="btn btn-danger" onClick={() => navigate("/shop")}>Shop Now</button></div></div>
        <div> <img src={pic3} alt="g" ></img>
          <div className="legend" id='legen'>   
            <h2>DELTA ZERTIGA PROCESSSOR</h2>
            <h1>FULL SCREEN DISPLAY</h1>
            <button className="btn btn-danger" onClick={() => navigate("/shop")}>Shop Now</button></div></div>
        <div> <img src={pic4} alt="g" ></img>
          <div className="legend" id='legen'>
            <h2>ZANIA BLACK EDITION</h2>
            <h1>CURVY BEVEL DUAL AUDIO</h1>
            <button className="btn btn-danger" onClick={() => navigate("/shop")}>Shop Now</button>
          </div></div>

         
        {/* </div> */}
      </Carousel>;
    </>
  );
}
export default Slide;