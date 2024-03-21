import React from 'react'
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useData } from "../Providers/AllcategoryData";
import axios from 'axios';
const MyCartCard = ({ brand, category, displayImage, price, rating, id, name, quantity, onDelete }) => {
    const navigate = useNavigate();
    const { getToken } = useData();

    const onClickHandler = () => {
        navigate("/productDetail", {
            state: {
                brand, category, displayImage, price, rating, name, id
            }
        })
        console.log({
            brand, category, displayImage, price, rating, name, id
        });


    }
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
    return (<>
        <button onClick={onClickHandler} className="focus:outline-none mt-32 block">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 w-full flex">
                <div className="w-1/3">
                    <img className="w-56 min-w-44 h-44" src={displayImage} alt="Product Image" />
                </div>
                <div className="p-4 w-2/3">
                    <h2 className="text-lg font-semibold text-gray-800">{brand}</h2>
                    <h4 className="text-base font-semibold text-gray-700 mb-2">{name}</h4>
                    <p className="text-sm text-gray-600 mb-2">Price: &#8377;{price}</p>
                    <p className="text-sm text-gray-600 mb-2">Category: {category}</p>
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600">Quantity: {quantity}</p>
                        <div className="flex items-center">
                            <i className="fas fa-star text-yellow-500 mr-1"></i>
                            <p className="text-sm text-gray-600">{rating}</p>
                        </div>
                    </div>
                    {/* Buttons */}
                    {/* {getToken && <button onClick={onClickBuyHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full mt-4 focus:outline-none mr-2">
                Buy Now
            </button>}
            {getToken && <button onClick={cartHandler} className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-full mt-4 focus:outline-none">
                Add to Cart
            </button>} */}
                </div>
            </div>
        </button>
        <button onClick={onItemDeleteHandler} className="bg-blue-500 text-2xl hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">Delete</button>
    </>

    )
}

export default MyCartCard