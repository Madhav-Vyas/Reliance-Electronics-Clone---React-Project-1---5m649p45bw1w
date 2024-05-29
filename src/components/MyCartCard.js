import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useData } from "../Providers/AllcategoryData";
import axios from 'axios';
const MyCartCard = ({ brand, category, displayImage, price, rating, id, name, quantity, onDelete, onUpdate }) => {
    const navigate = useNavigate();
    const { getToken, totalCartItemsHandler, totalCartItems } = useData();
    const [qty, setQty] = useState(1);
    const onClickHandler = () => {

        //in CART  if we click on the product card it will lead to detailed information page of that product
        navigate("/productDetail", {
            state: {
                brand, category, displayImage, price, rating, name, id
            }
        })
        console.log({
            brand, category, displayImage, price, rating, name, id
        });


    }

    //when we click on delte button of myCartCard this delte api is called and it deletes thet item ,it also calls onDelte function which ultimately calls fetch cart function on mycart page and item will disappear from UI
    const onItemDeleteHandler = async () => {
        try {
            const response = await axios.delete(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${id}`, {
                headers: {
                    projectId: "5m649p45bw1w",
                    Authorization: `Bearer ${getToken}`
                }
            })
            // navigate("/mycart");
            console.log(response);
            onDelete();



        }
        catch (err) {
            console.log(err);
        }

    }
    //when we add quantity of a product qty will be set
    const plusHandler = () => {

        setQty(qty + 1);
        addToCart();
    }
    //when we decrese the quantity of a product this function is called

    const minusHandler = () => {
        if (qty == 1) {
            onItemDeleteHandler()
            onDelete();
        }
        if (qty > 0) {
            setQty(qty - 1);
            addToCart();
        }
    }

    const addToCart = async () => {
        try {

            await axios.patch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${id}`, {
                quantity: qty
            }, {
                headers: {
                    Authorization: `Bearer ${getToken}`,
                    projectId: "5m649p45bw1w"
                }
            });
            //this function is also recived as props and it also calls fetchcart() on myCart page
            onUpdate();
            // totalCartItemsHandler(totalCartItems + 1);
        } catch (error) {
            console.error("Error adding product to cart:", error);
            alert("Failed to add product to cart. Please try again later.");
        }
    }
    return (<>

        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 w-full flex flex-col md:flex-row focus:outline-none mt-12">
            <div className="w-full md:w-1/3 flex items-start justify-center md:justify-start">
                {/* Align text at the start */}
                <img className="w-44 h-44 p-4 object-cover" src={displayImage} alt="Product Image" />
            </div>
            <div className="p-4 flex flex-col justify-start flex-grow">
                {/* Align text at the start */}
                <h2 className="text-sm font-semibold text-gray-800">{brand}</h2>
                <button onClick={onClickHandler} className="focus:outline-none block">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">{name}</h4>
                </button>


                <p className="text-sm text-gray-600 ml-6 mb-2">Price: &#8377;{price}</p>
                <p className="text-sm text-gray-600 ml-6 mb-2">Category: {category}</p>
                <div className="flex items-center">
                    <i className="fas fa-star text-yellow-500 mr-1 ml-6"></i>
                    <p className="text-sm text-gray-600 ">{rating}</p>
                </div>
            </div>
            <div className='flex flex-col justify-between items-center md:items-start mt-4 md:mt-0'>
                <div className='flex items-center w-full ml-4 '>
                    <span className='pr-2 font-lg font-semibold text-center'>Qty:</span>
                    <div className="text-sm text-gray-600 border border-gray-600 flex justify-between rounded-xl bg-white w-20">
                        <button className='p-1' onClick={minusHandler}><i className="fas fa-minus"></i></button>
                        <span className='text-lg font-bold'>{qty}</span>
                        <button className='p-1' onClick={plusHandler}><i className="fas fa-plus"></i></button>
                    </div>
                </div>
                <button onClick={onItemDeleteHandler} className="bg-red-500 mr-6 md:mr-0 text-xs mt-2 md:mt-0 ml-6 flex hover:bg-red-700 text-white font-bold px-2 py-2 rounded w-full md:w-28 justify-center">
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>




    </>

    )
}

export default MyCartCard