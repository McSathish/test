
import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

import pic from "./image/logo_300x300.webp"
function Heads(props) {
  const navigate=useNavigate();
  const location = useLocation();
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
function chance(){
  navigate("/")
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
    <li><Link to="/">Home</Link></li>
    <li className="collection"><Link to="/collection">Collection</Link></li>

     <li><Link to="/pagenew"> Shop </Link></li>
    <li><Link to="/acc">Accessories</Link></li>
    <li className="page"><Link to="/about">Page</Link>
    <ul className="page1">
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contect">Support</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
    </ul>
    </li>
    <li className="hoverli"> <i className="fa fa-user"/>{props.us}<div><button className='logoutbut' onClick={chance}>Logout</button></div></li>
    <li><i className="fa fa-cart-plus" onClick={()=>navigate("/newcart")}> </i></li>
    <li  className="ser"><i className="fa fa-search"> </i>
    <ul className="sr">
    <li className="d-f">
      <form>
        
      <input className="fa fa-search"  type="search" placeholder=" Search any one"  value={fname} onChange={(e) => { setFname(e.target.value) }} >
      </input><button   onClick={(e) => handleClick()} className="fa fa-search btn btn-danger"/>
      </form></li>
    </ul></li>
    {/* <li> */}
    {/* <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <i className="fa fa-search"> </i>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item >    
          <from className ="sr">   
      <input className="fa fa-search"  type="search" placeholder=" Search any one"  value={fname} onChange={(e) => { setFname(e.target.value) }} >
      </input><button   onClick={(e) => handleClick()} className="fa fa-search btn btn-danger"/>
      </from> 
      </Dropdown.Item>
     
      </Dropdown.Menu>
    </Dropdown>
    </li> */}
    <li><Link to="/paymant"><i className="fa fa-money "></i></Link></li>
    
   </ul>
</div>
</div>
  </>
  );
}

export default Heads;