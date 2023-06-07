import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Listitem from "./listitem";
import { modifyitem } from "./Redux/reducer/cart";
export default function Car(){
    const list=useSelector(
        (state)=>state.cart.list
    )
    const dispathch=useDispatch();
    const incremantitem=(item)=>{
       dispathch(modifyitem({...item,count:item.count+1}))
    }
    return(<div>
        {/* cart
        {list[0].brand} */}
        {list.map((item)=><Listitem {...item} key={item.id}
         incremantitem={()=>incremantitem(item)} />) }
    </div>
    );
}