import { createSlice } from "@reduxjs/toolkit";
import Product from "../../Product";
export const CartSlice=createSlice({
    name:"cart",
    initialState:{
list:[
    
]
    },
    reducers:{
        addItem:(state,{payload})=>{
state.list=[...state.list,{...payload,count:1}];
        },
    },
    removeitem:(state,{payload})=>{
    const index=state.list.findIndex(product=>product.id===payload.id);
    state.list=[
        ...state.list.slice(0,index),
        ...state.list.slice(index+1),

    ];
    },
    modifyitem:(state,{payload})=>{
        const index=state.list.findIndex(product=>product.id===payload.id);
        state.list=[
            ...state.list.slice(0,index),
          { ...state.list[index],count:payload.count},
            ...state.list.slice(index+1),
        ]
    }
    
});

export const{addItem,removeitem,modifyitem}=CartSlice.actions;
export default CartSlice.reducer;