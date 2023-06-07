import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import pic1 from "./image/img-1_73f531ca-ace8-42e4-88b0-7a8de5d93d7e_600x.webp"
import pic2 from "./image/img-2_600x.webp"
import pic3 from "./image/img-3_600x.webp"
import pic4 from "./image/img-4-1_600x.webp"
function Sid(){
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
return(
    <>
<Carousel responsive={responsive}
showDots={true}
autoPlay={true}
autoPlaySpeed={1000}>

  <div> <img src={pic1} alt="g" style={{height:"89vh",width:"100%"}}></img></div>
  <div> <img src={pic2} alt="g" style={{height:"89vh",width:"100%"}}></img></div>
  <div> <img src={pic3} alt="g" style={{height:"89vh",width:"100%"}}></img></div>
  <div> <img src={pic4} alt="g" style={{height:"89vh",width:"100%"}}></img></div>
</Carousel>;
</>
);
}
export default Sid;