import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import { useData } from "../../Providers/AllcategoryData";
import MyCartCard from '../../components/MyCartCard';
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
const MyCart = () => {
    const { getToken, totalCartItems,
        totalCartItemsHandler } = useData();
    const [data, setData] = useState([]);
    const [totalQty, setTotalQty] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [itemqty, setItemqty] = useState(1);
    const [totalItemsInCart, setTotalItemsInCart] = useState(0);

    const navigate = useNavigate();

    //this function is called every time we come to myCart page 
    useEffect(() => {
        fetchCart();
    }, [])


    const clearCartHandler = async () => {

        try {

            const response = await axios.delete("http://academics.newtonschool.co/api/v1/ecommerce/cart/", {

                headers: {

                    projectId: "5m649p45bw1w",

                    Authorization: `Bearer ${getToken}`,

                    'Content-Type': 'application/json',

                }

            });

            console.log(response);

        } catch (err) {

            console.error("Error clearing cart:", err);

        }

    }


    //this function make get request to API to fetch data which are added to cart by user
    const fetchCart = async () => {
        try {
            const response = await axios.get("https://academics.newtonschool.co/api/v1/ecommerce/cart", {
                headers: {
                    projectId: "5m649p45bw1w",
                    Authorization: `Bearer ${getToken}`,
                }
            })
            console.log("All Data...", response.data);


            //console.log("No of Data", response.data.results);//incluing all products with their respective qty total is this
            ////////////////////////
            //setTotalQty(response.data.data.items.length)
            //console.log("items length", response.data.data.items.length);
            totalCartItemsHandler(response.data.data.items.length)
            ///////////////////////////////

            console.log("Total Price", response.data.data.totalPrice);

            setTotalPrice(response.data.data.totalPrice)

            //console.log("itemQty", response.data.data.items[0].quantity);


            //console.log("Items length", response.data.data.items.length);
            console.log("Items in cart are -------------->", response.data.results);
            setTotalItemsInCart(response.data.results)

            setData(response.data.data.items);
            //console.log(...data);



        }
        catch (err) {
            console.log(err);
            alert("someError occured");
        }

    }
    //when we click on checkout ,all items present in cart are stored in data array and are sent to checkout page along with total price of all products
    const checkout = () => {
        if (totalCartItems < 1) {
            toast.error("OOPS, No Items in cart")
        }
        else {
            navigate("/checkoutpage", {
                state: {
                    data, totalPrice
                }
            })
        }

        console.log({
            data, totalPrice
        });
    }
    //these all products are being mapped using MyCartCard component , we send data through props and along with that we also send onUpdate and onDelte function so that if user delete some item in cart , fetchCart function is called and updated items are mapped inside myCart page

    return (<div className='flex flex-col md:flex-row justify-between mx-4 mb-6'>

        <div className='w-full md:w-3/5 md:mr-16 mb-2 md:mb-0'>
            <div className='w-full h-12 mt-6 bg-slate-100 shadow-lg rounded-md p-3 flex justify-between'>
                <div>My Cart ({totalItemsInCart} Items) </div>
                <div>Items Total : <span className='text-red-600'>{totalPrice}</span></div>
            </div>

            <div>
                {Array.isArray(data) && data.map((obj) => {
                    return <MyCartCard
                        brand={obj.product.brand}
                        category={obj.product.category}
                        displayImage={obj.product.displayImage}
                        price={obj.product.price}
                        rating={obj.product.ratings}
                        id={obj.product._id}
                        name={obj.product.name}
                        quantity={obj.quantity}
                        onDelete={() => fetchCart()}
                        onUpdate={() => fetchCart()}
                    />
                })}
            </div>
        </div>

        <div className='w-full md:w-2/5 mt-4 md:mt-0'>

            <div className="flex justify-center md:pr-12 md:pl-0">
                <button onClick={checkout} className="p-5 mt-6 mb-6 bg-red-600 w-64 md:w-96 hover:bg-blue-700 text-md text-slate-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Checkout
                </button>
            </div>
            <div className="card mt-3  w-full max-w-md bg-white shadow-md rounded-md overflow-hidden md:mt-6">
                <div className="text-gray-800 border-x-0 border-y px-4 py-2">
                    <h1 className="text-xl font-semibold">PRICE DETAILS</h1>
                </div>
                <div className="px-4 py-2">
                    <div className='flex justify-between'>
                        <p className="text-sm mt-2">Price ({totalItemsInCart} Items)</p>
                        <p>{totalPrice} </p>
                    </div>
                    {/* Assuming totalQty and totalPrice are variables holding the quantity and total price */}
                    <div className='flex justify-between'>
                        <p className="text-sm mt-2">Delivery Charges: </p>
                        <p className="text-green-600"><i className="fas fa-truck-fast"></i> FREE</p>
                    </div>
                    <div className='flex justify-between border-y'>
                        <p className="text-lg mt-2 font-semibold py-4">AMOUNT PAYABLE:</p>
                        <p className='text-lg mt-2 font-semibold py-4'> {totalPrice}</p>
                    </div>
                    <p className="text-xs text-gray-600 mt-2 py-4">Safe and Secure Payments. Easy returns. 100% Authentic products.</p>
                </div>
            </div>



        </div>
    </div>

    )
}

export default MyCart