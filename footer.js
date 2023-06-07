import React from "react";
import { Link } from "react-router-dom";
function Foot(){
    return(<>
<div className="foo">
<div className='row-md-4'>
    <h5>SUBSCRIBE NOW</h5>
    

    <h1>GET OUR UPDATES ALWAYS FAST</h1>
    </div>
    <div className='row-md-4'>
    <p>YOUR PERSONAL DATA WILL ALWAYS BE SAFE</p>
    <input placeholder="Your Email Address"/><button class="fa fa-arrow-right"> </button>
    </div>
    <div className='row-md-4'>
    <ul>
        <li> <Link to="/sear" style={{color:"white"}}>SEARCH </Link> <span>|</span></li>
        <li> <Link to="/sear" style={{color:"white"}}>HELP</Link> <span>|</span></li>
        <li> <Link to="/sear" style={{color:"white"}}>INFORMATION</Link> <span>|</span></li>
        <li> <Link to="//contect" style={{color:"white"}}>PRIVACY POLICY</Link> <span>|</span></li>
        <li> <Link to="/back" style={{color:"white"}}>SHIPPING DETAILS</Link></li>
    </ul>
    </div>
</div>
    </>);
}
export default Foot;