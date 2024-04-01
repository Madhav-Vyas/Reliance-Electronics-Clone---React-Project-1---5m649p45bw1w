import React, { useState } from 'react'
import { useData } from "../Providers/AllcategoryData";
import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductCard = ({ brand, category, displayImage, price, rating, name, id, description, features, sellerTag, subCategory, videos }) => {
    const { getToken } = useData();
    const navigate = useNavigate();
    const [fav, setFav] = useState(false);
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
    const wishHandler = async () => {
        try {

            const response = await axios.patch(
                "https://academics.newtonschool.co/api/v1/ecommerce/wishlist",
                {
                    productId: id // Assuming 'id' is defined and holds the product ID
                },
                {
                    headers: {
                        Authorization: `Bearer ${getToken}`, // Pass the token
                        projectId: "5m649p45bw1w"
                    }
                }
            );
            console.log(response);
            setFav(true);

        } catch (err) {
            console.log(err);
        }

    }


    return (
        <>
            <div className="mt-3 ml-1 rounded-xl">

                <div className='w-full flex justify-end pr-4 pt-4'>
                    {getToken && !fav && <button onClick={wishHandler}><i class="fa-regular fa-heart"></i></button>}
                    {getToken && fav && <button onClick={wishHandler}><i style={{ color: 'red' }} class="fa-solid fa-heart"></i></button>}
                </div>
                <button onClick={onClickHandler} className="mt-1 ml-1">
                    <div className="w-56 h-auto bg-transparent rounded-lg p-2 ml-2  cursor-pointer transform transition duration-300  text-ellipsis overflow-hidden max-h-[504px]">
                        <img className="w-full md:w-32 h-32 object-cover hover:scale-105 mx-auto mb-4" src={displayImage} alt="Product Image" />
                        <div className="text-left m-2 p-6 md:p-8 font mb-4">

                            <h4 className="text-xs hover:text-red-600 md:text-xs font-semibold text-blue-800 overflow-hidden" style={{ maxHeight: '2rem', textOverflow: 'ellipsis' }}>{name}</h4>

                            <h6 className=" mt-1 text-xs md:text-xs font-bold text-gray-600">Offer Price: &#8377;{price}</h6>
                            <p className='mt-1 text-xs md:text-xs font-bold text-gray-600'>MRP : <span className='line-through'>{price * 115 / 100}</span><span> (Inclusive of all taxes)</span></p>
                            <p className='mt-1 text-xs md:text-xs font-bold text-gray-600'>You save : 15% ({price * 15 / 100})</p>

                            <div className='bg-green-50 mt-1 border border-green-500  text-green-500 rounded-xl text-center text-sm'>{sellerTag}</div>

                            <p className="mt-1 text-xs md:text-xs text-gray-600">{category}</p>
                            <div className="flex items-center justify-left mt-2">
                                <i className="fa-solid fa-star text-yellow-300"></i>
                                <p className="text-sm md:text-base font-bold text-slate-800">{rating}</p>
                            </div>
                        </div>
                    </div>
                </button>

                <ToastContainer />
            </div>
        </>


    )
}

export default ProductCard