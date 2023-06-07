import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Forget(){
    const [details, setDetails] = useState([]);
    const [error, setError] = useState({});
    const [npass, setNpass] = useState("");

    const location = useLocation();
    const navigate=useNavigate();
    useEffect(() => {
        axios.get( `http://localhost:4002/getName/${location.state.us}`).then((response) => {
            setDetails(response.data);
          });
	  }, []);
     
      
    function click(){
if(validateForm()){
    axios.put(`http://localhost:4002/update/${location.state.us}`,{
            // Username:susername,
          
            Password:npass,
            
        }).then((res)=>{
            alert('success')
         })
          navigate('/');
          
        }
        else{
          alert('error')
        }
  }

  const validateForm = () => {
    const error = {};


    if (!npass) {
        error.pass = 'password is required';
    }
      else if (!/^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/.test(npass)) {
        error.pass = 'Invalid password';
     }
  


    setError(error);

    return Object.keys(error).length === 0;
};


return(<>
  
<div className="forget">
  <div className="forgeted">
    {/* <input placeholder="password" value={pass}></input> */}
    <h1>Change Password </h1>
    <p>{location.state.us} your account finded Successfully so You Will Change the Password Now!</p>
    <p>To help keep your account safe, i wants to make sure that its really you trying to sign in</p>
    <input placeholder="New password" value={npass}  name="npass" onChange={(e) => { setNpass(e.target.value) }}></input>
    <span>{error.pass}</span>
    <button onClick={click}>Change</button>
    </div>
</div>
{/* 
<table>
  <tr>
     
    <th>Name</th>
    <th>Email</th>
    <th>Password</th>
   
   
  </tr>
  {details.map((data,index)=>{
    return(
  <tr key={index}>
    
    <td>{data.userName}</td>
    <td>{data.email}</td>
    <td>{data.password}</td>
  

  </tr>
    )
    })
  }
</table> */}
</>);

}

export default Forget;