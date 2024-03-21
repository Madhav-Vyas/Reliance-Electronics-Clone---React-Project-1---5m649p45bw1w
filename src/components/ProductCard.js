import React, { useState } from 'react'
import { useData } from "../Providers/AllcategoryData";
import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
const ProductCard = ({ brand, category, displayImage, price, rating, name, id, description, features, sellerTag, subCategory, videos }) => {
    const { getToken } = useData();
    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate("/productDetail", {
            state: {
                brand, category, displayImage, price, rating, name, id, description, features, sellerTag, subCategory, videos
            }
        })
        console.log({
            brand, category, displayImage, price, rating, name, id, description, features, sellerTag, subCategory, videos
        });


    }

    return (
        <>
            <button onClick={onClickHandler} className="mt-3 ml-3 mb-12 ">
                <div className="w-72 h-100 bg-white rounded-lg p-4  border border-gray-40 cursor-pointer transform transition duration-300 hover:scale-110 shadow-xl text-ellipsis overflow-hidden min-h-[504px] max-h-[504px]">
                    <img className="w-full md:w-32 h-32 object-cover mx-auto mb-4" src={displayImage} alt="Product Image" />
                    <div className="text-center w-64 p-2 md:p-8">
                        <h2 className="text-lg md:text-2xl font-semibold text-gray-800">{brand}</h2>
                        <h4 className="text-sm md:text-lg font-semibold text-gray-800 text-ellipsis">{name}</h4>
                        <h6 className="text-sm md:text-lg font-bold text-gray-600">Price: &#8377;{price}</h6>
                        <p className="text-sm md:text-sm text-gray-600">{category}</p>
                        <div className="flex items-center justify-center mt-2">
                            <i class="fa-solid fa-star text-yellow-300"></i>
                            <p className="text-sm md:text-base font-bold text-slate-800">{rating}</p>
                        </div>
                    </div>
                    {/* {getToken && <button onClick={onClickBuyHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Buy Now
                </button>}
    
    
    
                {getToken && <button onClick={cartHandler} className="bg-gray-500   hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add to Cart
                </button>} */}
                </div>
            </button>
        </>

    )
}

export default ProductCard