import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
function Carted() {
  const navigate=useNavigate();
  // const[alart,setAlart]=useState(false);
    const {
      isEmpty,
      totalUniqueItems,
      items,
      updateItemQuantity,
      removeItem,
    } = useCart();
    
  
    if (isEmpty) return <p>Your cart is empty</p>;
  
    return (
      <>
      
       
  
        <div  className=" ncard " >

        <h1>Yours Shopping Items ({totalUniqueItems})</h1>
          {items.map((item) => (
            <div key={item.id} className="carditems  "  >
              
             <img src= {item.image}/>
             <h1>{item.name}</h1>
             <p><b>Price :</b>{item.price} Rs</p>
             <p><b>Quantity  :</b>{item.quantity} Pieces</p>
             <p><b> Total Amount :</b> { (item.quantity*item.price)} Rs</p> <br/>
           
              
              <button className="btn btn-success p-6 m-2 fa fa-plus"
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              >
                
              </button>
              <button  className="btn btn-danger p-6 m-2 fa fa-minus"
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)} >
                
              </button>
              <button  className="btn btn-danger p-6 m-2 fa fa-trash" onClick={() => removeItem(item.id)}></button>
              <button  className="btn btn-danger p-6 m-2 " onClick={() => navigate("/paymant")}>Order Now</button>
            </div>
            
          ))}
          
        </div>
        <button  className="uparrow"
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
       
      >
      <i class="fa fa-angle-double-up"></i>
      </button>
        {/* <button  className="btn btn-danger p-6 m-2 " onClick={() => navigate("/")}>Shop Now</button> */}
      </>
    );
  }
export default Carted;