import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import { useData } from "../../Providers/AllcategoryData";
import MyCartCard from '../../components/MyCartCard';
import { useNavigate } from "react-router-dom"
const MyCart = () => {
    const { getToken } = useData();
    const [getData, setData] = useState([]);
    const [totalQty, setTotalQty] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();
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
            setTotalQty(response.data.results)

            console.log("Total Price", response.data.data.totalPrice);
            setTotalPrice(response.data.data.totalPrice)

            console.log("Items", response.data.data.items);
            setData(response.data.data.items);

        }
        catch (err) {
            alert("someError occured");
        }

    }
    const checkout = () => {
        navigate("/checkoutpage", {
            state: {
                getData, totalPrice
            }
        })
        console.log({
            getData, totalPrice
        });
    }

    return (


        <>
            {/* <button onClick={clearCartHandler} className="bg-blue-500 text-2xl hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute top-0 right-0 mt-40 mr-4">
                Clear the Cart
            </button> */}

            {Array.isArray(getData) && getData.map((obj) => {
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


                />
            })}
            <div className='flex justify-center'> <h1 className='text-2xl m-5'>Total Price:<span className='text-4xl text-red-500 text-bold'>{totalPrice}</span></h1></div>


            <div className="flex justify-center">
                <button onClick={checkout} className="p-5 mb-96 bg-red-600 w-96 hover:bg-blue-700 text-4xl text-slate-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Checkout
                </button>
            </div>


        </>
    )
}

export default MyCart