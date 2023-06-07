import React from "react";
import Foot from "./footer";
import Heads from "./nav";
import Same from "./same";
import Slide from "./slider";
// import Axios from "./table";
// import { Link } from 'react-scroll';
import { useLocation ,Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from 'react';


function Home() {
    const location = useLocation();
   
   
   
    return (<>
        <Heads us={location.state.us}/>
      
          <button  className="uparrow"
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
       
      >
      <i class="fa fa-angle-double-up"></i>
      </button>
     
        <Slide/>
        <Same/>
        <Foot/>
        {/* <Axios/> */}
    </>);
}
export default Home;