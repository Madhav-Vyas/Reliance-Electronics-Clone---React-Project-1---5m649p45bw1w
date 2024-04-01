import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import CheckOutCard from "../components/CheckOutCard";

const CheckoutPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { data, totalPrice } = location.state;

    const [getData, setData] = useState({
        pincode: "",
        firstname: "",
        lastname: "",
        houseNo: "",
        colony: "",
        landmark: "",
        city: "",
        state: "",
        mobile: "",
        landline: ""
    });
    const { pincode, firstname, lastname, houseNo, colony, landmark, city, state, mobile, landline } = getData;
    const [error, setError] = useState("");
    const onChangeHandler = (event) => {
        setData({ ...getData, [event.target.name]: event.target.value })
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (!getData.pincode) {
            setError("PIN code is mandatory")
        }
        else if (!getData.firstname) {
            setError("First-name is mandatory")
        }
        else if (!getData.lastname) {
            setError("Last-name is mandatory")
        }
        else if (!getData.houseNo) {
            setError("Please enter house No.")
        }
        else if (!getData.colony) {
            setError("Please enter colony")
        }
        else if (!getData.landmark) {
            setError("Landmark is mandatory")
        }
        else if (!getData.city) {
            setError("Enter your city")
        }
        else if (!getData.state) {
            setError("Enter your state")
        }
        else if (!getData.mobile) {
            setError("Enter Your Mobile Number")
        }
        else if (getData.mobile && getData.mobile.length < 10) {
            setError("Please Enter a Valid Mobile Number")
        }

        else {
            console.log(getData);
            navigate("/paymentpage", {
                state: {
                    totalPrice, pincode, firstname, lastname, houseNo, colony, landmark, city, state, mobile, landline
                }
            })
            console.log({

                totalPrice
            });
        }
    }










    // const goToPaymentPage = () => {
    //     navigate("/paymentpage", {
    //         state: {

    //         }
    //     })
    //     console.log({


    //     });
    // }
    return (<>
        <div className='flex justify-between'>
            <div className='text-xl mt-4 font-semibold ml-20 underline'> Shipping Details <i class="fa-solid fa-truck" style={{ color: "blue" }}></i></div>
            <div className='text-xl mt-4 font-semibold mr-96 underline '> Order Summary <i class="fa-solid fa-box" style={{ color: "red" }}></i></div>
        </div>

        <div className='flex gap-x-40'>





            <>
                <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg p-6 space-y-6 mt-4 mb-20 ml-4">
                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                            <strong className="font-bold">Error:</strong>
                            <span className="block sm:inline">{error}</span>
                        </div>
                    )}

                    <form onSubmit={onSubmitHandler}>

                        {/* Pincode */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <input type="text" name="pincode" id="pincode" placeholder="Pincode" value={getData.pincode} onChange={onChangeHandler} className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md m-4" />
                            </div>
                        </div>

                        {/* First Name and Last Name */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="col-span-2 sm:col-span-1">
                                <input type="text" name="firstname" id="first_name" placeholder="First Name" value={getData.firstname} onChange={onChangeHandler} className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md m-4" />
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                                <input type="text" name="lastname" id="last_name" placeholder="Last Name" value={getData.lastname} onChange={onChangeHandler} className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md m-4" />
                            </div>
                        </div>

                        {/* House/Flat No. and Colony/Street */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="col-span-2 sm:col-span-1">
                                <input type="number" name="houseNo" id="house_flat" placeholder="House/Flat No." value={getData.houseNo} onChange={onChangeHandler} className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md m-4" />
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                                <input type="text" name="colony" id="colony_street" placeholder="Colony/Street" value={getData.colony} onChange={onChangeHandler} className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md m-4" />
                            </div>
                        </div>

                        {/* Landmark */}
                        <div>
                            <input type="text" name="landmark" id="landmark" placeholder="Landmark" value={getData.landmark} onChange={onChangeHandler} className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md m-4" />
                        </div>

                        {/* City and State */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="col-span-2 sm:col-span-1">
                                <input type="text" name="city" id="city" placeholder="City" value={getData.city} onChange={onChangeHandler} className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md m-4" />
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                                <input type="text" name="state" id="state" placeholder="State" value={getData.state} onChange={onChangeHandler} className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md m-4" />
                            </div>
                        </div>

                        {/* Mobile No. and Landline No. */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="col-span-2 sm:col-span-1">
                                <input type="number" name="mobile" id="mobile" placeholder="Mobile No." value={getData.mobile} onChange={onChangeHandler} className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md m-4" />
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                                <input type="tel" name="landline" id="landline" placeholder="Landline No." value={getData.landline} onChange={onChangeHandler} className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md m-4" />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 m-4">
                                Submit
                            </button>
                        </div>

                    </form>
                    <div className='text-red-600 text-xs'>*dont add 0 or +91 in start of mobile number</div>

                </div>
            </>

















            <>
                <div className='mb-96'>


                    {Array.isArray(data) && data.map((obj) => {
                        return <CheckOutCard
                            displayImage={obj.product.displayImage}
                            price={obj.product.price}
                            rating={obj.product.ratings}
                            name={obj.product.name}
                            quantity={obj.quantity}
                        />
                    })}
                    {/* <div className='flex justify-center'><h1 className='text-lg md:text-lg m-5'>Total Price: <span className='text-lg md:text-lg text-bold text-red-500'>{totalPrice}</span></h1></div> */}


                    <div className="flex justify-center">
                        {/* <button onClick={onSubmitHandler} className="p-2 md:p-2 bg-red-600 w-72 md:w-96 hover:bg-blue-700 text-2xl md:text-lg text-slate-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Confirm Order
                        </button> */}
                    </div>

                </div>
            </>
        </div>
    </>)
}

export default CheckoutPage
// I've used Tailwind CSS classes to adjust the font sizes, margins, and padding for mobile screens (text-xl md:text-2xl, text-2xl md:text-4xl, m-5, p-3 md:p-5, etc.).
// The font size of the "Order Summary" heading has been adjusted using Tailwind's responsive text size utilities (text-3xl md:text-4xl).
// Similarly, the font size of the total price and the button have been adjusted for mobile screens using Tailwind's responsive text size utilities (text-2xl md:text-4xl).
// The padding of the button has been adjusted for mobile screens (p-3 md:p-5).