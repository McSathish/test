

import React from "react";
import axios from 'axios';
import { useState } from "react";
import { MDBDataTable } from "mdbreact";
import { useEffect } from "react";

function Axio() {
 
  const [tab,setTab] = useState([]);
  useEffect(() => {
    axios.get('https://api.sampleapis.com/coffee/hot')
    .then(
      res=>{
         setTab(res.data);
      })
    }, []); 
 
  
  
  const list = {
    columns: [
        {
            label: "ID",
            field: "title",
            sort: "asc",
            width: 150
        },
        {
            label: "Description",
            field: "description",
            sort: "asc",
            width: 270
        },
        {
            label: "Ingredients",
            field: "ingredients",
            sort: "asc",
            width: 200
        },

        {
            label: "Image",
            field: "image",
            sort: "asc",
            width: 100
        }
    ],
    rows : tab.map(item => {
      console.log(tab);
      
        return {
            title:item.title,
            description: item.description,
            ingredients: item.ingredients,
            image: <img src={item.image} width='100px'></img>
           
        }

    })
};
  



  return (
    <>
      <MDBDataTable striped bordered hover data={list} />
   
    </>
  );
} 
export default Axio;