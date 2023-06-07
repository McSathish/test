import React from "react";
import { useNavigate } from "react-router-dom";
import Foot from "./footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";
import Heads from "./nav";
import Sheads from './homes';
function Login(){
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [details, setDetails] = useState([]);
const navigate=useNavigate();
useEffect(() => {
    axios.get('http://localhost:4002/ge').then((response) => {
      setDetails(response.data);
    });
  }, []);
console.log(details);
function check(){
  const al=details.find(({ userName})=>{
    console.log(userName)
    return userName === name });
    if(al!==undefined){
     
      navigate('/forget', {
          state: {
            us:name
          }})
  }
  else{
  alert(' You Enter the Name  and so will be Find Account !');
  
  }
}

function Click(){


//   if ((name !== "")&&(password !== "")) {
//       navigate("/");
//   }
//   else {
//       alert("Enter valid user Details")  
//   }

    const al=details.find(({ userName, password})=>{
        console.log(userName,password)
        return userName === name && password === pass});
    
    console.log(al)
    if(al!==undefined){
        console.log('successful');
        navigate('/home', {
            state: {
              us:name
            }})
    }
    else{
    alert('Not founded your username & Password');
    navigate('/reg')
    }

}
    return(<>
    <Sheads/>
     {/* <div className="abcde">
            <h1>LOGIN US</h1>
            <ul>
                <li><Link to="/" style={{color:"white"}}>Home</Link><span>/</span> </li>
                <li>Login US</li>
            </ul>
        </div> */}
        <div className="log">
    <div className="login">
        <h1>Login</h1>
        <form>
         <input  type='text' placeholder="Enter the Name" value={name} onChange={(e) => { setName(e.target.value) }} />
         
         <input type="password" placeholder="Enter the Password" value={pass}   onChange={(e) => { setPass(e.target.value)}} /><br/>
         <button  onClick={Click}>Sign In</button>
         </form>
         <hr/>
         <ul>
         <li onClick={check} >Forgot your password?</li>
         <li ><Link to="/reg" > Create Account </Link></li>
         <li> <Link to="/find">Find Account?</Link> </li>
         </ul>
    </div>
        </div>
        <Foot/>
        </>);
}
export default Login;