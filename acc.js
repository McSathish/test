import React from "react";
import Foot from "./footer";
import Heads from "./nav";
import pi1 from "./pic/p1.webp"
import pi2 from "./pic/p2.webp"
import pi3 from "./pic/p3.webp"
import pi4 from "./pic/p4.webp"
import pi5 from "./pic/p5.webp"
import pi6 from "./pic/p6.webp"
import pi7 from "./pic/p7.webp"
// import { Link } from "react-router-dom";
import { useLocation ,Link} from "react-router-dom";
function Accessories(){
  // const location = useLocation();
    return(
    <>
    <Heads/>
     <div className="abcde">
            <h1>COLLECTIONS</h1>
            <ul>
                <li><Link to="/home" style={{color:"white"}}>Home</Link><span>/</span> </li>
                <li> Latest Product</li>
            </ul>
        </div>
        <button  className="uparrow"
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
       
      >
      <i class="fa fa-angle-double-up"></i>
      </button>
    <div className="row" id="row">
      <div class='col-md-3'><img src={pi1} alt=''></img><div className="row1"><h4>ANDROID SELLER</h4><p>6item</p><button>Shop Now</button></div></div>
      <div class='col-md-3'><img src={pi2} alt=''></img><div className="row1"><h4>BEST SELLER</h4><p>6item</p><button>Shop Now</button></div></div>
      <div class='col-md-3'><img src={pi3} alt=''></img><div className="row1"><h4>DUAL SIM PHONES</h4><p>6item</p><button>Shop Now</button></div></div>
      <div class='col-md-3'><img src={pi4} alt=''></img><div className="row1"><h4>FEATURED PRODUCTS</h4><p>6item</p><button>Shop Now</button></div></div>
    </div>
     <div className="row" id="row">
     <div class='col-md-3'><img src={pi5} alt=''></img><div className="row1"><h4>LATEST PRODUCT</h4><p>6item</p><button>Shop Now</button></div></div>
     <div class='col-md-3'><img src={pi6} alt=''></img><div className="row1"><h4>NEW OFFERS</h4><p>6item</p><button>Shop Now</button></div></div>
     <div class='col-md-3'><img src={pi7} alt=''></img><div className="row1"><h4>UPCOMING PRODUCTS</h4><p>6item</p><button>Shop Now</button></div></div>
     <div class='col-md-3'><img src={pi7} alt=''></img><div className="row1"><h4>WINDOWS PHONE</h4><p>6item</p><button>Shop Now</button></div></div>
   </div>
   <Foot/>
    
    </>
    );
}
export default Accessories;