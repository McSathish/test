import React from "react";
import Foot from "./footer";
import { Link } from "react-router-dom";
function Contect(){
    function Sum(){
        alert("Thank you for FeedBack")
    }
    return(<>
     <div className="abcde">
            <h1>CONTECT US</h1>
            <ul>
                  <li><Link to="/" style={{color:"white"}}>Home</Link><span>/</span>
                 </li>
                <li>Contect US</li>
            </ul>
        </div>
        <button  className="uparrow"
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
       
      >
      <i class="fa fa-angle-double-up"></i>
      </button>
    <div id="cont" className="col">
  
        <div className="row-md-6">
            <h1>GET IN TOUCH WITH THE BELOW LOCATION AND CONTACT DETAILS</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.3490531588272!2d77.3912949!3d8.8470578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04259ca281df3d%3A0x67ea7438a4d336d7!2sPungampatti%2C%20Tamil%20Nadu%20627415!5e0!3m2!1sen!2sin!4v1677319890145!5m2!1sen!2sin" width="100%" height="450" />
        </div>
     
        <div className="row-md-6 d-flex contall"  >
             <div className="contone" ><i className="fa fa-phone" ></i>
             <h1>PHONE</h1>
             <p>Toll-Free: 0000 - 123 - 456789<br/>
Fax: 0000 - 123 - 456789</p>
             </div>
             <div className="conttwo"><i className="fa fa-envelope" aria-hidden="true"></i>
             <h1>EMAIL</h1>
             <p>mail@example.com<br/>
support@example.com</p></div>
             <div className="contthre"><i className="fa fa-address-card" aria-hidden="true"></i>
             <h1>ADDRESS</h1>
             <p>No: 58 A, East Madison Street,<br/>
Baltimore, MD, USA 4508</p></div>
        </div>
        <div className="row-md-6" ></div>
       <div className="sum">
        <h1>CONTACT FORM</h1>
         <input  type={"text"}placeholder="Enter the Name" required/>
         <input type={"email"} placeholder="Enter the E-Mail" required/>
         <input type={"text"} placeholder="Enter the Phone" required/>
         <textarea placeholder="Give Your FeedBack"></textarea><br/>
         <button onClick={Sum}>Click</button>
       
       
    </div>
    </div>
    <Foot/>
    </>);
}
export default Contect;