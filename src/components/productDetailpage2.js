import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import parse from 'html-react-parser';
import { useData } from "../Providers/AllcategoryData";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    const { getToken, totalCartItemsHandler, totalCartItems } = useData();
    const navigate = useNavigate();
    const [pincode, setPincode] = useState('');

    const [reviews, setReviews] = useState([]);
    const location = useLocation();
    //this id come when we click on product card , many details are sent but here we use only id
    const { id } = location.state;

    //this is state ,in which all detailed information is being stored.
    const [user, setUser] = useState([]);
    const [getCart, setCart] = useState(false);

    //a button is made to see data more or less that thing is handled by these 2 states  ->seemore,custRev
    const [seeMore, setSeeMore] = useState(false);
    const descriptionHandler = () => {
        setSeeMore(!seeMore);
    }
    const [custRev, setCustRev] = useState(false)
    const customerReviewhandler = () => {
        setCustRev(!custRev)
    }

    const [qty, setQty] = useState(1);
    //the data set in user variable , is being destructred here and used to display data.
    const { brand, category, createdAt, description, displayImage, features, images, name, price, ratings, sellerTag, subCategory, videos, _id } = user;
    console.log(brand, displayImage);
    //these 2 functions are called every time when we are lead to this page
    useEffect(() => {
        fetchProductDetails();
        fetchProductReviews();
    }, [])

    const onRedirectHandler = () => {
        navigate("/register");
    }

    //The id which come from product card click is used here in API to fetch detailed data of product
    const fetchProductDetails = async () => {
        try {
            const response = await axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/product/${id}`, {
                headers: {
                    projectId: "5m649p45bw1w"
                }
            })
            console.log(response.data.data);
            //this is state ,in which all detailed information is being stored.
            setUser(response.data.data);

        }
        catch (err) {
            console.log("Internal Server Error");
        }

    }
    //The id which come from product card click is used here in API to fetch customer reviews of product
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

    const fetchCart = async () => {
        try {
            const response = await axios.get("https://academics.newtonschool.co/api/v1/ecommerce/cart", {
                headers: {
                    projectId: "5m649p45bw1w",
                    Authorization: `Bearer ${getToken}`,
                }
            })
            totalCartItemsHandler(response.data.data.items.length)
            console.log(response.data.data.items.length);
        }
        catch (err) {
            alert("someError occured");
        }

    }

    //when we click on addToCart button a patch request is made and product will be added to cart 
    const addToCart = async () => {
        try {

            const response = await axios.patch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${id}`, {
                quantity: qty // Assuming you want to add 1 quantity of the product
            }, {
                headers: {
                    Authorization: `Bearer ${getToken}`,
                    projectId: "5m649p45bw1w"
                }
            });
            console.log(response);
            console.log(response.data.data.items[0].quantity);
            toast.success("Product added to cart successfully!");
            //this function is called every time we add product to cart to update length of arry which contains all cart products
            fetchCart();

        } catch (error) {
            console.error("Error adding product to cart:", error);
            toast.alert("Failed to add product to cart. Please try again later.");
        }
    }


    //when we click on buy now these data is being transfered to BuyNowcheckoutpage, along with this data
    const buyNowHandler = () => {
        navigate("/checkoutpageb", {
            state: {
                displayImage, name, price, ratings, sellerTag
            }
        })
    }






    //slides to show based on screen size ------------------------------------------------------
    const [slidesToShow, setSlidesToShow] = useState(6);
    useEffect(() => {
        //if screen size is less than 768px then show only 2 slides otherwise 6 slides
        const handleResize = () => {
            // Adjust slidesToShow based on screen width
            if (window.innerWidth < 768) {
                setSlidesToShow(4);
            } else {
                setSlidesToShow(3);
            }
        };

        // Initial call to set slidesToShow
        handleResize();

        // Listen to window resize event, when resize event happens means , when we change screen size then this function is trigreed
        window.addEventListener('resize', handleResize);

        // Clean up on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    //----------------------------------------------







    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: slidesToShow,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />

    };
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", height: "40px", paddingTop: "10px", borderRadius: "8px", background: "#a9adb0", opacity: 0.9, position: "absolute", zIndex: 12 }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", height: "40px", paddingTop: "10px", borderRadius: "8px", background: "#a9adb0", opacity: 0.9, position: "absolute", zIndex: 12 }}
                onClick={onClick}
            />
        );
    }


















    useEffect(() => {
        setMainImage(displayImage)
    }, [displayImage])
    console.log(displayImage);
    const [mainImage, setMainImage] = useState();
    return (



        <>
            <>
            </>
            <div className="global-container w-full flex flex-col md:flex-row mt-5">
                <div className="left w-full md:w-[30%] h-full">
                    <div className="container p-4 w-full md:w-full">
                        <img loading="lazy" src={mainImage} alt="Product" className="mb-4 w-100%"></img>
                        {/* <h2 className="text-4xl font-bold mb-4">Product Images</h2> */}
                        <div className=" px-6">
                            <Slider {...settings}>
                                {images && images.length > 0 ? (
                                    images.map((image, index) => (

                                        <img loading="eager" onClick={() => setMainImage(image)} key={index} src={image} alt={`Product Image ${index}`} className="w-full rounded-md" />


                                    ))
                                ) : (
                                    <p className="text-xl">No Images Available</p>
                                )}
                            </Slider>
                        </div>
                        <div className='mt-8 text-sm'>Product videos</div>
                        <div className="grid grid-cols-3 gap-6 mt-4">

                            {videos && videos.length > 0 ? (
                                videos.map((video, index) => {
                                    return <video key={index} src={video} controls autoPlay muted loop className="w-full"></video>;
                                })
                            ) : (
                                <p className="text-xl mt-10">No Videos Available </p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="right w-full md:w-[40%] h-full mt-6 pr-3 ml-2">
                    <h1 className="text-lg text-blue-800 font-bold text mb-4">{name}</h1>
                    <h1 className="text-lg font-semibold my-2">{brand}</h1>
                    <p className="text-lg font-semibold mb-2">{category}</p>

                    {features && features.length > 0 && (
                        <div> <span className='text-red-600 font-semibold'>Key Features</span>
                            <ul className="list-disc pl-4 text-sm">
                                {features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    )}


                    <div className="flex items-center my-2">
                        <i className="fa-solid fa-star text-yellow-300"></i>
                        <p className="text-sm font-bold text-slate-800">{ratings}</p>
                    </div>
                    <div className="text-sm font-bold mb-2 text-green-500 underline">{sellerTag}</div>
                    <p className="text-xs font-semibold mb-2">ID: {id}</p>
                    <div className="text-xs">CREATED AT: {createdAt}</div>



                    <div className='text-red-600 font-semibold mt-6'>Description</div>

                    {/* code for see more and see less for description */}

                    {!seeMore &&
                        <><div className='w-full h-96 overflow-y-hidden'>
                            <div className="mb-6 text-sm mt-4">{typeof description === 'string' && parse(unescapeHTML(description))}</div>

                        </div>
                            <div>
                                <button className='text-blue-500' onClick={descriptionHandler}>See more &gt;</button>
                            </div></>}

                    {seeMore &&
                        <><div className='w-full overflow-auto'>
                            <div className="mb-6 text-sm mt-4">{typeof description === 'string' && parse(unescapeHTML(description))}</div>

                        </div>
                            <div>
                                <button className='text-blue-500' onClick={descriptionHandler}>See less ^</button>
                            </div></>}




                    <div className='mb-10'>
                        <h2 className="text-xl font-bold my-4 text-red-600 mt-12 underline">Customer Reviews :</h2>

                        {!custRev && (
                            <div>
                                {reviews.length > 0 ? (
                                    <>
                                        <div className='h-80 overflow-y-hidden'>
                                            {reviews.map(review => (
                                                <div key={review._id} className=" border border-gray-300 mb-4 ">
                                                    <p className="text-sm font-bold border border-gray-300 p-2">User: {review.user}</p>
                                                    <div className='p-2'>
                                                        <p className="text-sm">Ratings: {review.ratings.toFixed(1)}</p> {/* Fixed the ratings to one decimal place */}
                                                        <p className="text-sm">Text: {review.text}</p>
                                                    </div>
                                                </div>
                                            ))}

                                        </div>
                                        <div>
                                            <button className='text-blue-500' onClick={customerReviewhandler}>See more &gt;</button>
                                        </div>
                                    </>
                                ) : (
                                    <p className="italic text-lg">No Customer Reviews Yet</p>
                                )}
                            </div>
                        )}

                        {custRev && (
                            <div>
                                {reviews.length > 0 ? (
                                    <>
                                        <div className=''>
                                            {reviews.map(review => (
                                                <div key={review._id} className=" border border-gray-300 mb-4 ">
                                                    <p className="text-sm font-bold border border-gray-300 p-2">User: {review.user}</p>
                                                    <div className='p-2'>
                                                        <p className="text-sm">Ratings: {review.ratings.toFixed(1)}</p> {/* Fixed the ratings to one decimal place */}
                                                        <p className="text-sm">Text: {review.text}</p>
                                                    </div>
                                                </div>
                                            ))}

                                        </div>
                                        <div>
                                            <button className='text-blue-500' onClick={customerReviewhandler}>See less ^</button>
                                        </div>
                                    </>
                                ) : (
                                    <p className="italic text-lg">No Customer Reviews Yet. Be The first </p>
                                )}
                            </div>
                        )}


                    </div>
                </div>
                <div className="right w-full md:w-[25%] h-full mt-3 ml-2">
                    <p className="text-lg mb-2 mt-2"> Offer Price: <span className="text-2xl font-bold mb-2 text-blue-900 mt-2" >&#8377;{price}</span></p>
                    <p className='mb-2 mt-2'>MRP : <span className='line-through'>{price * 115 / 100}</span><span> (Inclusive of all taxes)</span></p>
                    <p className='text-green-500 mb-2 mt-2'>You save : 15% ({price * 15 / 100})</p>

                    <div>EMIs (Credit Cards) from {(price / 24).toFixed} | </div>
                    <div className='text-blue-500 hover:text-blue-700 cursor-pointer'>View-Plans</div>

                    <div className='font-bold text-lg mb-2 mt-2'>Free Shipping !</div>

                    <fieldset className="border border-blue-300 rounded-md mb-2 mt-2">
                        <legend className="block text-sm font-medium text-blue-700">Enter / Detect PIN Code</legend>
                        <input
                            type="text"
                            id="pincode"
                            placeholder="Enter Pincode"
                            value={pincode}
                            onChange={(e) => setPincode(e.target.value)}
                            className="w-full p-2 rounded-md focus:outline-none focus:border-blue-500"
                            style={{ background: "#edeceb" }}

                        />
                    </fieldset>

                    <div className='mb-2 mt-2 text-sm border p-2 border-gray-200'><i class="fa-solid fa-truck"></i> Standard Delivery : 3-5 Business Days</div>
                    <div className='text-sm border p-2 mb-2 mt-2 border-gray-200'><i class="fa-solid fa-check"></i> Cash on Delivery Available</div>
                    <div className='text-sm border mb-2 mt-2 p-2 border-gray-200'> <i class="fa-solid fa-star"></i> Delivery assurance is subject to our delivery locations staying open as per govt. regulations </div>

                    <div className='flex w-full justify-evenly mb-4'>
                        {getToken && <button className="bg-red-500 text-base hover:bg-red-700 mt-4 text-white font-bold py-2 px-6 rounded" onClick={addToCart}>Add to Cart</button>}
                        {getToken && <button onClick={buyNowHandler} className="text-base bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-6 mt-4 rounded">Buy Now</button>}
                        {!getToken && <button onClick={onRedirectHandler} className="bg-blue-500 hover:bg-blue-700 text-white text-base font-bold py-2 px-6  rounded mt-4">Buy Now</button>}

                    </div>



                </div>
            </div >
        </>

    );
};

export default productDetailpage2;

// I've wrapped the entire layout in a div with the class global-container to make it full-width and flex for both mobile and desktop screens.

// Inside this container, I've split the layout into two sections using Tailwind's responsive classes (w-full md:w-[30%] and w-full md:w-[70%]) for mobile and desktop screens.

// For smaller screens, both sections will take up the full width (w-full), and for larger screens, the left section will take up 30% of the width and the right section will take up 70%.

// Additionally, I've adjusted some padding and text sizes for better mobile responsiveness.