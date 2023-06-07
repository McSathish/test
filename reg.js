import React from "react";
import { useNavigate } from "react-router-dom";
import Foot from "./footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
function Reg() {
    const [error, setError] = useState({});
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [details, setDetails] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:4002/ge`).then((response) => {
            setDetails(response.data);
        });
    }, []);
    const len = details.length;
    const le = len + 1
    // setUid(le)
    function ok(e) {
        e.preventDefault();

        if (validateForm()) {
            axios.post('http://localhost:4002/add', {
                personid: le,
                userName: username,
                email: email,
                mnumber: mobileNumber,
                address: address,
                Password: password,

            }).then((res) => {
                alert('done')
            }).catch((err) => {
                console.log(err)
            })
            console.log('done')
            navigate("/")
        }
        
    }
    const validateForm = () => {
        const error = {};

        if (!username) {
            error.name = 'Name is required';
        }

        if (!address) {
            error.address = 'address is required';
        }
        if (!email) {
            error.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            error.email = 'Invalid email address';
        }
        if (!password) {
            error.pass = 'password is required';
        }
        //   else if (!/^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/.test(password)) {
        //     error.pass = 'Invalid password';
        //   }
        if (!mobileNumber) {
            error.mobileNumber = 'mobileNumber is required';
        }
        // else if (!/^\d{10}$/.lastIndextest(password)) {
        //     error.mobileNumber = 'Invalid mobileNumber';
        //   }


        setError(error);

        return Object.keys(error).length === 0;
    };



    return (<>
        <div className="abcde">
            <h1>LOGIN US</h1>
            <ul>
                <li><Link to="/" style={{ color: "white" }}>Home</Link><span>/</span> </li>
                <li>Regisiter US</li>
            </ul>
        </div>
        <div className="log">


            <div>
                <form className="form-control" id="reg" >

                    <div id="reg1">
                        <i className="fa fa-user"></i><label>User Name:</label>
                        <input type="text" placeholder="Your Name" value={username} onChange={(e) => { setUsername(e.target.value) }} ></input>

                    </div>
                    <label>  <span>{error.name}</span></label>
                    <div id="reg2">
                        <i className="fa fa-envelope"></i><label>Email :</label>
                        <input type="email" placeholder="Contect Email" value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                    </div>
                    <label>   <span>{error.email}</span></label>
                    <div id="reg3">
                        <i className="fa fa-phone"></i><label>Mobile Number:</label>
                        <input type="text" placeholder="Contect Number" value={mobileNumber} onChange={(e) => { setMobileNumber(e.target.value) }}></input>
                    </div>
                    <label>     <span>{error.mobileNumber}</span></label>
                    <div id="reg4">
                        <i className="fa fa-address-card"></i><label>Address:</label>
                        <textarea placeholder="Your Address" value={address}  onChange={(e) => { setAddress(e.target.value) }} ></textarea>

                    </div>
                  <label>  <span>{error.address}</span></label>

                    <div id="reg5">
                        <i className="fa fa-credit-card"></i><label>Password :</label>
                        <input type="text" placeholder=" Create Password" value={password} onChange={(e) => { setPassword(e.target.value) }}></input>

                    </div>
                    <label> <span>{error.pass}</span></label>



                    <button className="btn btn-danger p-2 " onClick={ok}>Save</button>
                </form>


            </div>


        </div>
        <Foot />
    </>);
}
export default Reg;