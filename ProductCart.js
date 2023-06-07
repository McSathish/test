import React from "react";
import { useNavigate } from "react-router-dom";
export default function ProductCart(props){
    const navigate=useNavigate();
    return(
        <div className="card m-2 cursor-pointer" role='button' onClick={()=>navigate(`/Product/${props.id}`)}>
 <div>
    <img src={props.image} height={150} width={180} alt={props.brand} className=""></img>
 </div>
 <div className="card-body">
    <h3 className="card-title">{props.category}</h3>
    <h5 className="mt-2">price={props.price}</h5>
    <h5  className="mt-2"> discount={props. discount}%</h5>
    <h5  className="mt-2"> Rating={props. rating}</h5>
 </div> 
 <div>
    {props.stock>0? <button className="btn btn-success">Avalible</button>:<button className="btn btn-danger"> Not Avalible</button>}
 </div>
        </div>
    )
}