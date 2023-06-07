import React from "react";
export default function Listitem(props){
    return(
        <div className="d-flex m-2 align-center" >
        <div>
           <img src={props.image} height={150} width={180} alt={props.brand} className=""></img>
        </div>
        {/* <div className="card-body"> */}
           <h3 className="card-title">{props.category}</h3>
           <h5 className="mt-2 me-4" >price={props.price}</h5>
           <h5  className="mt-2 me-4"> discount={props. discount}%</h5>
           <h5  className="mt-2 me-4"> Rating={props. rating}</h5>
        {/* </div>  */}
        <div>
     <button className="btn btn-success ms-3" onClick={props.incremantitem}>+</button>
     <span className="ms-3">quantity {props.count}</span><button className="btn btn-danger ms-3"  onClick={props.decremantitem}> -</button>
     <button className="btn btn-danger ms-3"  onClick={props.removeitem}> Remove cart</button>
        </div>
               </div>
    )
}