import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
function Find(){
    const [error, setError] = useState({});
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');
     const [emessage, setEmessage] = useState('');
    const [messages, setMessages] = useState('');
  
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [details, setDetails] = useState([]);
    const navigate=useNavigate();
    useEffect(() => {
        axios.get('http://localhost:4002/ge').then((response) => {
          setDetails(response.data);
        });
      }, []);
    console.log(details);
    // function check(){
        // const al=details.find(({ userName,mobileNumber,email})=>{
        //   console.log(userName)
        //   return userName === username&& mobileNumber===mobileNumber&&email===email });
        //   if(al!==undefined){
        //     alert('successful');}
          
    //         axios.post('http://localhost:4002/generate-otp', {
         
    //           userName: username,
    //           email: email,
            

    //       }).then((res) => {
    //           alert('done')
    //       }).catch((err) => {
    //           console.log(err)
    //       })

          // navigate('/forget', {
          //   state: {
          //     us:username
          //   }})
    //       console.log('done')


    //     }
    //     else{
    //     alert('error');
        
    //     }
    //   }

    const handleGenerateOtp = async () => {
      try {
        const al=details.find(({ userName,mobileNumber,email})=>{
          console.log(userName)
          return userName === username&& mobileNumber===mobileNumber&&email===email });
          if(al!==undefined){
            alert('successful')
        const response = await axios.post('http://localhost:4002/generate-otp', { username, email })
        setMessages(response.data.otp); 
        setMessage(response.data.message);
          }
      } catch (error) {
        setMessage('Failed to generate OTP');
      }
    };
  
    const handleVerifyOtp = async () => {
     
if(messages===otp){
        setTimeout(() => {
          navigate('/forget', {
            state: {
              us:username
            }})
        }, 5000);
}else{
  setEmessage("OTP Not Match")
}
      
}



    return(<>
    


<div  id="find">
    {/* <form className="form-control" > */}

    <h1>Find Account</h1>
    <p>To help keep your account safe, i wants to make sure that its really you trying to sign in</p>
    <div  id="finded">
        <div id="fin1">
            <i className="fa fa-user"></i><label>User Name:</label>
            <input type="text" placeholder="Your Name" value={username} onChange={(e) => { setUsername(e.target.value) }} ></input>

        </div>
        <label>  <span>{error.name}</span></label>
        <div id="fin2">
            <i className="fa fa-envelope"></i><label>Email :</label>
            <input type="email" placeholder="Contect Email" value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
        </div>
        <label>   <span>{error.email}</span></label>
        <div id="fin3">
            <i className="fa fa-phone"></i><label>Mobile Number:</label>
            <input type="text" placeholder="Contect Number" value={mobileNumber} onChange={(e) => { setMobileNumber(e.target.value) }}></input>
        </div>
        <label>     <span>{error.mobileNumber}</span></label>
       
        <button className="btn btn-danger p-2 " onClick={handleGenerateOtp }>find</button>
    {/* </form> */}



<div  id="fin4">
<label>I will send a verification code to {email}. Standard rates apply.</label>
<label>Enter OTP:</label>

        <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
      </div>
      <div>
        <button onClick={handleVerifyOtp}>Verify OTP</button>
      </div>
      <div>{message}</div>
            <div>{emessage}</div>
      {/* <div>{messages}</div> */}
      </div>
      </div>




    </>);
}
export default Find;