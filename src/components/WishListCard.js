import React from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useData } from '../Providers/AllcategoryData';
const WishListCard = ({ displayImage, name, price, rating, id, onDelete }) => {
    const { getToken } = useData()
    const navigate = useNavigate();
    const onClickHandler = () => {


        navigate("/productDetail", {
            state: {
                displayImage, price, rating, name, id,
            }
        })
        console.log({
            //  brand, category, displayImage, price, rating, name, id, description, features, sellerTag, subCategory, videos
        });
    }
    const onDeletehandler = async () => {
        try {
            const response = await axios.delete(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${id}`, {
                headers: {
                    Authorization: `Bearer ${getToken}`, // Pass the token
                    projectId: "5m649p45bw1w"
                }
            })

            console.log(response);
            onDelete();

        } catch (err) {
            console.log(err);
        }

    }

    return (
        <div className='flex flex-col w-56 h-auto bg-transparent rounded-lg p-4  cursor-pointer transform transition duration-300  text-ellipsis overflow-hidden max-h-[504px]'>
            <button onClick={onClickHandler} className="mt-3 ml-1">
                <div className="w-56 h-auto bg-transparent rounded-lg p-4  cursor-pointer transform transition duration-300  text-ellipsis overflow-hidden max-h-[504px]">
                    <img className="w-full md:w-44 h-auto p-2 object-cover hover:scale-105 mx-auto mb-4" src={displayImage} alt="Product Image" />
                    <div className="text-left pt-6 md:pt-8 font ">

                        <h4 className="text-xs hover:text-red-600 md:text-xs font-semibold text-blue-800 overflow-hidden" style={{ maxHeight: '2rem', textOverflow: 'ellipsis' }}>{name}</h4>

                        <h6 className=" mt-1 text-xs md:text-xs font-bold text-gray-600">Offer Price: &#8377;{price}</h6>
                        <p className='mt-1 text-xs md:text-xs font-bold text-gray-600'>MRP : <span className='line-through'>{price * 115 / 100}</span><span> (Inclusive of all taxes)</span></p>
                        <p className='mt-1 text-xs md:text-xs font-bold text-gray-600'>You save : 15% ({price * 15 / 100})</p>





                    </div>
                </div>
            </button>
            <div className='w-full flex justify-center'>
                <button onClick={onDeletehandler} className="bg-red-500 text-xs ml-6 flex  hover:bg-red-700 text-white font-bold px-2 py-2 rounded me-auto "> <i class="fa-solid fa-trash-can"></i></button>
            </div>
        </div>
    )
}

export default WishListCard