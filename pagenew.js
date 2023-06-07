import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useCart } from "react-use-cart";
import Foot from "./footer";
import Heads from "./nav";
import { Link } from "react-router-dom";

function Page() {
    const { addItem } = useCart();
    const navigate=useNavigate();
    // const navigate=useNavigate;
    const [alart, setAlart] = useState(false);
    const Productlist = [
        {
            id: 1,
            name: "Iqoo 11pro",
            title: "5G Mobile & 128 GB Internal Storage",
            price: 10000,
            discount: 15.9,
            rating: 2.1,
            stock: 4,
            brand: "VIVO Sub Brand",
            category: "smart-phone",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQGbi_W4bzKVX-zTpTqsb_25nFUhPrzL_4rw&usqp=CAU"

        },
        {
            id: 2,
            name: "Nothing ",
            title: "5G Mobile & 128 GB Internal Storage",
            price: 60000,
            discount: 10.9,
            rating: 5,
            stock: 94,
            brand: "Mcs",
            category: "smart-phone",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYM1-vBhbvAmEc89_-Hk-nP76ziw15DORwVd_IFhhU6aWLvSE2rw-PONqFlA8oS8S3XEg&usqp=CAU"

        },
        {
            id: 3,
            name: "Oppo F21pro",
            title: "5G Mobile & 128 GB Internal Storage",
            price: 20000,
            discount: 12.9,
            rating: 4.69,
            stock: 94,
            brand: "Oppo",
            category: "smart-phone",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2OHAH2S7NPf2pBUrUs0fG4n2SiakG0EeZA&usqp=CAU"

        }, {
            id: 4,
            name: "iphone 14pro max",
            title: "5G Mobile & 128 GB Internal Storage",
            price: 100000,
            discount: 1.9,
            rating: 4.69,
            stock: 2,
            brand: "Apple",
            category: "smart-phone",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROnye0TQdbFw0m4U65oB9jP7Syvw-lFVW4gw&usqp=CAU"

        },
        {
            id: 5,
            name: "iphone 5",
            title: "5G Mobile & 128 GB Internal Storage",
            price: 30000,
            discount: 12.9,
            rating: 4.69,
            stock: 1,
            brand: "Apple",
            category: "smart-phone",
            image: "https://guide-images.cdn.ifixit.com/igi/o4OjCNmNeOhvsS1P.medium"

        },
        {
            id: 6,
            name: "SAMSUNG z-flip",
            title: "5G Mobile & 128 GB Internal Storage",
            price: 20000,
            discount: 15.9,
            rating: 4.00,
            stock: 1,
            brand: "SAMSUNG",
            category: "smart-phone",
            image: "https://m.media-amazon.com/images/I/41uBE7W6wcL._SL500_.jpg"

        }
        ,
        {
            id: 7,
            name: "One plus+",
            title: "5G Mobile & 128 GB Internal Storage",
            price: 20000,
            discount: 15.9,
            rating: 4.00,
            stock: 0,
            brand: "Oppo",
            category: "smart-phone",
            image: "https://www.wizekart.com/22723-large_default/oneplus-9r-12gb-256gb-refurbished-very-good.jpg"
        }
        ,
        {
            id: 8,
            name: "Vivo Y22",
            title: "5G Mobile & 128 GB Internal Storage",
            price: 20000,
            discount: 15.9,
            rating: 4.00,
            stock: 0,
            brand: "VIVO",
            category: "smart-phone",
            image: "https://m.media-amazon.com/images/I/41W7ucPjk3L._SL500_.jpg"
        },
        {
            id: 9,
            name: "Recmi 9",
            title: "5G Mobile & 128 GB Internal Storage",
            price: 20000,
            discount: 15.9,
            rating: 4.00,
            stock: 9,
            brand: "Redmi",
            category: "smart-phone",
            image: "https://www.wizekart.com/22723-large_default/oneplus-9r-12gb-256gb-refurbished-very-good.jpg"

        },
        {
            id: 10,
            name: "Vivo y21 ",
            title: "5G Mobile & 128 GB Internal Storage",
            price: 20000,
            discount: 15.9,
            rating: 4.00,
            stock: 9,
            brand: "Vivo",
            category: "smart-phone",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwpUhFuZ5AajMPWtfC-PN4lL2MGkz9ZUTFRg&usqp=CAU"

        },
        {
            id: 11,
            name: " Apple iphone",
            title: "5G Mobile & 128 GB Internal Storage",
            price: 20000,
            discount: 15.9,
            rating: 4.00,
            stock: 9,
            brand: "iphone",
            category: "smart-phone",
            image: "https://img5.gadgetsnow.com/gd/images/products/additional/large/G201776_View_1/mobiles/smartphones/apple-iphone-12-64-gb-red-4-gb-ram-.jpg"

        },
        {
            id: 12,
            name: "iphone",
            title: "5G Mobile & 128 GB Internal Storage",
            price: 20000,
            discount: 15.9,
            rating: 4.00,
            stock: 0,
            brand: "Apple",
            category: "smart-phone",
            image: "https://img5.gadgetsnow.com/gd/images/products/additional/large/G201776_View_1/mobiles/smartphones/apple-iphone-12-64-gb-red-4-gb-ram-.jpg"

            // image:"E:\project2\pharmacy\src\img\bg-1.webp",
        }


    ];

    return (
        <>
            <Heads/>
            {/* <div className="abcde"> 
            <h1>Shop Now</h1>
            <ul>
                <li><Link to="/home" style={{color:"white"}}>Home</Link><span>/</span> </li>
                <li> Latest Product</li>
            </ul>
        </div> */}
            {alart && <span className="alert alert-success span m-2 d-flex justify-content-center  ">item add to cart</span>}
            <div className="d-flex flex-wrap justify-content-center p-4 m-4 ">

                {Productlist.map((p) => (
                    <div key={p.id} className="newc  p-2">
                        <img src={p.image} width={180} height={150} className="p-2 "></img>
                        <h1> {p.name} </h1>
                        <h5> {p.title} </h5>
                        <p><i>Brand :</i>{p.brand}</p>
                        <p><i>Rating :</i>{p.rating}</p>
                        <p><i>Price:</i>{p.price} Rs</p>
 {p.stock > 0?<button className="btn btn-success" onClick={() => { addItem(p); setAlart(true); setTimeout(() => setAlart(false), 3000) }}>Avalible</button>
                : <button className="btn btn-danger"> Not Avalible</button>}
                       
                 <button className="btn btn-danger p-2 m-3" onClick={() => { addItem(p); setAlart(true); setTimeout(() => setAlart(false), 3000) }} >Add to cart</button>
                 <button className="btn btn-danger p-2 m-3" onClick={() => { addItem(p);navigate("/paymant") } }>Buy Now</button>
             </div> 
                ))}
            </div>
            <Foot />
        </>
    );
}
export default Page;