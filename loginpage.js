import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
function Login2() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const handleClick = () => {


        if (name !== "") {
            navigate('/home');
            sessionStorage.setItem("logedname", name);
        }
        else {
            alert("Enter valid user Name or Password")
            setName("")
            setPassword("")
        }
    }

    return (
        <>

            <div className="loginPage">
                <form className="loginform">
                    <h2>Login Form</h2>
                    <i className="fa fa-user"></i><label>User Name:</label>
                    {/* state name use(setFname) */}
                    <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} /><br />

                    <i className="fa fa-unlock-alt"></i><label>Password:</label>
                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} /><br />

                    <input type="button" className="button1" value="Login" onClick={(e) => handleClick()} />
                </form>
            </div>

        </>
    );
}
export default Login2;