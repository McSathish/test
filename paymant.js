import React from "react";
import { useNavigate,useLocation} from "react-router-dom";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useState  ,useEffect ,useRef} from "react";
import Foot from "./footer";
import axios from "axios"

export default function Paymant() {
    const [name, setName] = useState("");
    const [num, setNum] = useState("");
    const [femail, setFemail] = useState("");
    const [fcard, setFcard] = useState("");
    const [faddress, setFaddress] = useState("");
    const [fitem, setFitem] = useState("");
    const [famount, setFamount] = useState("");
    const [details,setDetails] = useState([]);
    const location = useLocation()

    // useEffect(() => {
    //     axios.get( `http://localhost:4002/${location.state.us}`).then((response) => {
    //       setDetails(response.data);
    //     });
    //   }, []);




    const navigate = useNavigate();
    const ref = useRef(null);
    const refs = useRef(null);
    const {
        items,
    } = useCart();

//     items.map((it)=>{
//         setFitem(it.name);
//    })
   
    const handleClick = () => {

if(name==""&&femail==""&&fcard==""&&faddress==""){
    alert(refs.current.value)
    alert(ref.current.value)
}
else{
        axios.post('http://localhost:4002/addnew',{
          
        Orderitem : refs.current.value,
        OrderName: name,
        Mobilenumber: num,
        OrderEmail: femail,
        CardNumber :fcard,
        Totalamount : ref.current.value,
        Address :faddress,
        }).then((res)=>{  
          alert('done')
        }).catch((err)=>{
          console.log(err)
        })
          console.log('done')
     
          navigate('/load', {
            state: {
              ue:femail,us:name
               }})
}

    }
  
    
    return (<>
        <div className="abcde">
            <h1>Pay Now</h1>
            <ul>
                <li><Link to="/" style={{ color: "white" }}>Home</Link><span>/</span> </li>
                <li style={{ color: "white" }} onClick={() => navigate("/pagenew")}>Back</li>
            </ul>
        </div>

        <h1>Pay Now</h1>
        {items.map((item) => (

        
                <div>
                    <form className="form-control " id="pay" >
                    <div>
                      
                        <p ><b>Order Item :</b> {item.name}</p>
                        <p><b>Value of Item :</b> {(item.quantity * item.price)} <b>Rs</b></p>
                        <input ref={refs}   defaultValue={  item.name}/>
                        </div>
                        <div id="pay1">
                            <i className="fa fa-user"></i><label>User Name:</label>
                            <input type="text" placeholder="Your Name" value={name} onChange={(e) => { setName(e.target.value) }} ></input>
                        </div>
                        <div id="pay2">
                            <i className="fa fa-phone"></i><label>Mobile Number:</label>
                            <input type="text" placeholder="Contect Number" value={num} onChange={(e) => { setNum(e.target.value) }}></input>
                        </div>
                        <div id="pay3">
                            <i className="fa fa-envelope"></i><label>Email :</label>
                            <input type="email" placeholder="Contect Email"  value={femail} onChange={(e) => { setFemail(e.target.value) }}></input>
                        </div>
                        <div id="pay5">
                            <i className="fa fa-credit-card"></i><label>Credit Card :</label>
                            <input type="text" placeholder="Card Number"  value={fcard} onChange={(e) => { setFcard(e.target.value) }}></input>
                        </div>
                        <div id="pay6">
                            <i className="fa fa-money"></i><label>Total Amount :</label>
                            <input ref={ref}   defaultValue={  item.quantity*item.price}/>
                            {/* <p  > {(item.quantity * item.price)} <b>Rs</b> </p> */}
                        </div>
                        <div id="pay4">
                            <i className="fa fa-address-card"></i><label>Address:</label>
                            <textarea placeholder="Your Address"  value={faddress} onChange={(e) => { setFaddress(e.target.value) }} ></textarea>
                        </div>
                      
                        <button className="btn btn-danger p-2 " onClick={(e) => handleClick()}> Pay</button>
                    </form>


                </div>
           
        ))} 
<Foot/>
    </>);
} 