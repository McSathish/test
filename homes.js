// import { Alert } from "bootstrap";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Dropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

import pic from "./image/logo_300x300.webp"
function Heads() {
  const navigate=useNavigate();
  const [fname, setFname] = useState('');
  const {

    items,
  
  } = useCart();
  
  const handleClick = () => {
     const data=[{name:"iqoo"},
     {name:"iphone"},
     {name:"oppo"},
     {name:"vivo"},
     {name:"oneplus"},
     {name:"samsung"},
     {name:"nothing"},
     {name:"mobile"},
     {name:"phone"},
     
    
    ];
     const fn=(data.find((item)=>item.name===fname.toLowerCase()));
  
     console.log(fname);
    if (fn) {
      navigate('/pagenew')
    }
    else{
      navigate('/notfound')
    }
  }
  return (
  <>
<div className="nbar">
<div className="im">
 <img src={pic} alt="g" style={{height:"45px",width:"140px"}}></img>
 {/* {items.map((item) => (
 <p>{item.name}</p>
 ))} */}
</div>

<div className="list1">
<input type="checkbox" id="checkbox_toggle"/>
<label for="checkbox_toggle" className="menu">&#9776;</label>
   <ul className="list">
   
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contect">Support</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
    
    </ul>
</div>
</div>
  </>
  );
}

export default Heads;