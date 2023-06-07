import React from "react";
import { useNavigate } from "react-router-dom";
import Foot from "./footer";
import { Link } from "react-router-dom";
function Sear(){
    
const navigate=useNavigate();
      function Signin(){
    navigate('/home')
  }
    return(<>
     <div className="abcde">
            <h1>SEARCH US</h1>
            <ul>
                <li><Link to="/" style={{color:"white"}}>Home</Link><span>/</span> </li>
                <li>Search US</li>
            </ul>
        </div>
        <div className="log">
    <div className="login">
        <h1>SEARCH FOR PRODUCTS ON OUR SITE</h1>
         <input  type={"search"}placeholder="search the here" required/>
     
         <button onClick={Signin}>CLICK</button>
    </div>
        </div>
        <Foot/>
        </>);
}
export default Sear;