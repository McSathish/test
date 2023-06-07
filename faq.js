import React from "react";
import Foot from "./footer";
import { Link } from "react-router-dom";
function Faq(){

    return(
        <>
      <div className="abcde">
            <h1>FAQ</h1>
            <ul>
                <li><Link to="/" style={{color:"white"}}>Home</Link><span>/</span> </li>
                <li>FAQ</li>
            </ul>
        </div>
        <button  className="uparrow"
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
       
      >
      <i class="fa fa-angle-double-up"></i>
      </button>
    <div className="first">
<h1>FREQUENTLY ASKED QUESTIONS</h1>
<p>A LOT MORE QUESTIONS</p>
<div className="order">
<h2>HOW WILL MY ORDER BE DELIVERED TO ME ?</h2>
<p>As with labor and with great pains some great things 
    are accomplished, but at the same time they happen as with great labor and pains. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come out, 
    they are in the fault of the official.</p>
</div>
<div className="order">
<h2>WHAT DO I NEEED KNOW?</h2>
<p>As with labor and with great pains some great things 
    are accomplished, but at the same time they happen as with great labor and pains. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come out, 
    they are in the fault of the official.</p>
</div>
<div className="order">
<h2>HOW WILL I KNOE IF ORDER ID PLACED SUCCESSFULLY ?</h2>
<p>As with labor and with great pains some great things 
    are accomplished, but at the same time they happen as with great labor and pains. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come out, 
    they are in the fault of the official.</p>
</div>
<div className="order">
<h2>CAN I CANCAL MY ORDER ?</h2>
<p>As with labor and with great pains some great things 
    are accomplished, but at the same time they happen as with great labor and pains. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come out, 
    they are in the fault of the official.</p>
</div>
    </div>
    {/* <Foot/> */}
    </>
    );
}
export default Faq