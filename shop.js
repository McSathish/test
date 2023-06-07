import React from "react";
import { Productlist } from "./data/ProductList";
import Heads from "./nav";
import ProductCart from "./ProductCart";
function Shop(){
    return(
      <>
      <Heads/>
    <div className="d-flex flex-wrap justify-content-center p-3">
         
    {Productlist.map((product)=><ProductCart {...product} key={product.id}/>)}
    
    </div>
    </>);
}
export default Shop;