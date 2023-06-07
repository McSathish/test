import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Productlist } from "./data/ProductList";
import Home from "./home";
import Heads from "./nav";
import { addItem } from "./Redux/reducer/cart";
export default function Product(){
    const params=useParams();
    const dispathch=useDispatch();
    const props=Productlist.find((element)=>element.id===parseInt(params.id));
    const addtocart=()=>{
 dispathch(addItem(props));
    }
    return(
      <>
         <Heads></Heads>
    <div>
    
        {/* Product id{params.id}{item.brand} */}
        <div className="card m-2 " role='button'>
 <div>
    <img src={props.image} height={350} width={400} alt={props.brand} className=""></img>
 </div>
 <div className="card-body">
    <h3 className="card-title">{props.category}</h3>
    <h5 className="mt-4 me-2">price={props.price}</h5>
    <h5  className="mt-4"> discount={props. discount}%</h5>
    <h5  className="mt-4"> Rating={props. rating}</h5>
 </div> 
 <div>
    {props.stock>0? 
    <><button className="btn btn-success">Buy Now</button>
    
    <button className="btn btn-success " onClick={addtocart}>Add to Cart</button>
    </>:<button className=" ms-3 btn btn-danger"> Not Avalible</button>}
 </div>
        </div>
    </div>
    </>);
}