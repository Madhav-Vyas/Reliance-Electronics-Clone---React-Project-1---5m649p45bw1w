import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import parse from 'html-react-parser';
import { useData } from "../Providers/AllcategoryData";
import { useNavigate } from "react-router-dom";
const unescapeHTML = str => {
    if (str) {
        return str.replace(
            /&amp;|&lt;|&gt;|&#39;|&quot;/g,
            tag =>
            ({
                '&amp;': '&',
                '&lt;': '<',
                '&gt;': '>',
                '&#39;': "'",
                '&quot;': '"'
            }[tag] || tag)
        );
    }
    else {
        return str;
    }

}
// unescapeHTML('&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;');
const productDetailpage2 = () => {
    const { getToken } = useData();
    const navigate = useNavigate();

    const [reviews, setReviews] = useState([]);
    const location = useLocation();
    const { id } = location.state;

    const [user, setUser] = useState([]);
    const [getCart, setCart] = useState(false);


    const { brand, category, createdAt, description, displayImage, features, images, name, price, ratings, sellerTag, subCategory, videos, _id } = user;
    useEffect(() => {
        fetchProductDetails();
        fetchProductReviews();
    }, [])

    const onRedirectHandler = () => {
        navigate("/register");
    }



    // Example usage
    const addToCart = async () => {
        try {

            await axios.patch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${id}`, {
                quantity: 1 // Assuming you want to add 1 quantity of the product
            }, {
                headers: {
                    Authorization: `Bearer ${getToken}`,
                    projectId: "5m649p45bw1w"
                }
            });
            alert("Product added to cart successfully!");
        } catch (error) {
            console.error("Error adding product to cart:", error);
            alert("Failed to add product to cart. Please try again later.");
        }
    }







    const fetchProductDetails = async () => {
        try {
            const response = await axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/product/${id}`, {
                headers: {
                    projectId: "5m649p45bw1w"
                }
            })
            console.log(response.data.data);
            setUser(response.data.data);

        }
        catch (err) {
            console.log("Internal Server Error");
        }

    }

    const fetchProductReviews = async () => {
        try {
            const response = await axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/review/${id}`, {
                headers: {
                    projectId: "5m649p45bw1w"
                }
            })
            console.log(response.data.data);
            setReviews(response.data.data);
        }
        catch (err) {

        }
    }
    const buyNowHandler = () => {
        navigate("/checkoutpageb", {
            state: {
                displayImage, name, price, ratings, sellerTag
            }
        })
    }


    return (


        <>
            <div className="global-container w-full flex flex-col md:flex-row mt-5">
                <div className="left w-full md:w-[30%] h-full">
                    <div className="container mx-auto p-4 w-full">
                        <img src={displayImage} alt="Product" className="mb-4"></img>
                        <h2 className="text-4xl font-bold mb-4">Product Images</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {images && images.length > 0 ? (
                                images.map((image, index) => (
                                    <img key={index} src={image} alt={`Product Image ${index}`} className="w-full" />
                                ))
                            ) : (
                                <p className="text-xl">No Images Available</p>
                            )}
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {videos && videos.length > 0 ? (
                                videos.map((video, index) => {
                                    return <video key={index} src={video} controls autoPlay muted loop className="w-full"></video>;
                                })
                            ) : (
                                <p className="text-xl">No Videos Available</p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="right w-full md:w-[70%] h-full mt-6">
                    <h1 className="text-4xl font-bold text-slate-700 mb-4">{name}</h1>
                    <h1 className="text-2xl font-semibold my-4">{brand}</h1>
                    <p className="text-lg font-semibold mb-2">{category}</p>
                    <p className="text-3xl font-bold mb-2">Price: &#8377;{price}</p>
                    <div className="flex items-center mt-2">
                        <i className="fa-solid fa-star text-yellow-300"></i>
                        <p className="text-sm font-bold text-slate-800">{ratings}</p>
                    </div>
                    <div className="text-2xl font-bold mb-2">{sellerTag}</div>
                    <p className="text-lg font-semibold mb-2">ID: {id}</p>
                    <div className="text-xl">CREATED AT: {createdAt}</div>
                    {getToken && <button onClick={buyNowHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Buy Now</button>}
                    {!getToken && <button onClick={onRedirectHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Buy Now</button>}
                    {getToken && <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={addToCart}>Add to Cart</button>}
                    <div className="mb-6 text-2xl mt-14">{typeof description === 'string' && parse(unescapeHTML(description))}</div>
                    <div>
                        {features && features.length > 0 && (
                            <ul className="list-disc pl-4 text-xl">
                                {features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold my-4 text-red-600 mt-72">Customer Reviews :</h2>
                        {reviews.length > 0 ? (
                            reviews.map(review => (
                                <div key={review._id} className="border p-4 mb-4">
                                    <p className="text-xl font-bold">User: {review.user}</p>
                                    <p className="text-xl">Ratings: {review.ratings}</p>
                                    <p className="text-xl">Text: {review.text}</p>
                                </div>
                            ))
                        ) : (
                            <p className="italic text-xl">No Customer Reviews Yet</p>
                        )}
                    </div>
                </div>
            </div>
        </>

    );
};

export default productDetailpage2;

// I've wrapped the entire layout in a div with the class global-container to make it full-width and flex for both mobile and desktop screens.

// Inside this container, I've split the layout into two sections using Tailwind's responsive classes (w-full md:w-[30%] and w-full md:w-[70%]) for mobile and desktop screens.

// For smaller screens, both sections will take up the full width (w-full), and for larger screens, the left section will take up 30% of the width and the right section will take up 70%.

// Additionally, I've adjusted some padding and text sizes for better mobile responsiveness.