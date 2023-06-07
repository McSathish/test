import React from "react";
import { Link } from "react-router-dom";
import Foot from "./footer";
function Notfound(){
    return(<>
      <div className="abcde">
            <h1>Result</h1>
            <ul>
                <li><Link to="/" style={{color:"white"}}>Home</Link><span>/</span> </li>
                <li>Result</li>
            </ul>
        </div>
        <div className="not ">
            <p>Sorry to Say Not Found the Details</p>
        </div>
        <Foot/>
    </>);
}
export default Notfound;