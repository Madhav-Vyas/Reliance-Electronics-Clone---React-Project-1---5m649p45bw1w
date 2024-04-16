import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import { useData } from "../../Providers/AllcategoryData";
import MyCartCard from '../../components/MyCartCard';
import { useNavigate } from "react-router-dom"
const MyCart = () => {
    const { getToken, totalCartItems,
        totalCartItemsHandler } = useData();
    const [data, setData] = useState([]);
    const [totalQty, setTotalQty] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const navigate = useNavigate();
    const [delivery, setDelivery] = useState("");
    useEffect(() => {
        fetchCart();
    }, [])
    const clearCartHandler = async () => {
        try {
            const response = await axios.delete("http://academics.newtonschool.co/api/v1/ecommerce/cart/", {
                headers: {

                    projectId: "5m649p45bw1w",
                    Authorization: `Bearer ${getToken}`,

                }
            })
            console.log(response);
        }
        catch (err) {
            alert("cant clear try again after some time");
        }

    }
    const fetchCart = async () => {
        try {
            const response = await axios.get("https://academics.newtonschool.co/api/v1/ecommerce/cart", {
                headers: {
                    projectId: "5m649p45bw1w",
                    Authorization: `Bearer ${getToken}`,
                }
            })
            console.log("All Data...", response.data);


            console.log("No of Data", response.data.results);//incluing all products with their respective qty total is this
            ////////////////////////
            setTotalQty(response.data.data.items.length)
            console.log("items length", response.data.data.items.length);
            totalCartItemsHandler(response.data.data.items.length)
            ///////////////////////////////

            console.log("Total Price", response.data.data.totalPrice);
            setTotalPrice(response.data.data.totalPrice)

            console.log("Items length", response.data.data.items.length);
            setData(response.data.data.items);



        }
        catch (err) {
            alert("someError occured");
        }

    }
    const checkout = () => {
        navigate("/checkoutpage", {
            state: {
                data, totalPrice
            }
        })
        console.log({
            data, totalPrice
        });
    }
    const deliveryCharges = () => {
        if (totalPrice > 500) {
            setDelivery("0");
        }
        else {
            setDelivery("100")
        }
    }
    return (<div className='flex flex-col md:flex-row justify-between mr-4 mb-6'>
        <div className='w-full md:w-3/5 md:mr-4 mb-4 md:mb-0'>
            <div className='w-full h-12 mt-6 bg-slate-100 shadow-lg rounded-md p-3 flex justify-between'>
                <div>My Cart ({totalQty} items)</div>
                <div>Items Total : <span className='text-red-600'>{totalPrice}</span></div>
            </div>

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

        <div className='w-full md:w-2/5 mt-4 md:mt-0'>
            <div className="flex justify-center">
                <button onClick={checkout} className="p-5 mt-6 mb-6 bg-red-600 w-full md:w-96 hover:bg-blue-700 text-md text-slate-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Checkout
                </button>
            </div>

            <div className="card mt-3 ml-4 w-full max-w-md bg-white shadow-md rounded-md overflow-hidden">
                <div className="text-gray-800 border-x-0 border-y px-4 py-2">
                    <h1 className="text-xl font-semibold">PRICE DETAILS</h1>
                </div>
                <div className="px-4 py-2">
                    <div className='flex justify-between'>
                        <p className="text-sm mt-2">Price ({totalQty} Items)</p>
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