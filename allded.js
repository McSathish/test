import React from "react";
import About from "./about";
import Accessories from "./acc";
import Back from "./back";
import Collection from "./collection";
import Contect from "./contect";
import Content from "./content";
import Faq from "./faq";
import Foot from "./footer";
import Login from "./login";
import Heads from "./nav";
import ProductCart from "./ProductCart";
import Same from "./same";
import Shop from "./shop";
// import Sid from "./sid";
import Slide from "./slider";
import Axios from "./table";

function Allded(){
    return(<>

    <Heads/>
    <Slide/>
    {/* <ProductCart/> */}
    {/* <Shop/> */}
    <Same/>
    <Axios/>
    {/* <Content/> */}
    {/* <Contect/> */}
    {/* <Faq/> */}
    {/* <Accessories/> */}
    {/* <About/>  */}
    {/* <Login/> */}
    
    <Foot/>
    {/* <Sid/> */}
{/* <Back/> */}
{/* <Collection/> */}
    </>);
}
export default Allded;