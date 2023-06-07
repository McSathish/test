import React, { useEffect, useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import { useCart } from "react-use-cart";
import axios from "axios";

export default function Load() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
      } = useCart();
    const [count, setCount] = useState(15);
    const [message, setMessage] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        setInterval(() =>
            setCount((count) => count - 1), 1000);

        setTimeout(() =>  navigate('/home', {
            state: {
              us:location.state.us
               }}), 15000);
    }, [navigate])  
   



    return (<>
    {items.map((item) => (

        <div> <p>The {item.name} price {(item.quantity *item.price)} Rs</p>
          {location.state.us}  Your {item.name} order have been placed successfully. you will be redirected in {count} secounds</div>
        ))}
        {/* <div><button onClick={handleOtp}>send</button></div> */}
    </>);

}

