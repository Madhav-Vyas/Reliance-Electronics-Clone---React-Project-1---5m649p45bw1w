import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CheckOutCard from '../components/CheckOutCard';
import { toast } from 'react-toastify';
const BuynowCheckoutPage = () => {
    const navigate = useNavigate();
    //recive data from product detail page.
    const location = useLocation();
    const { displayImage, name, price, ratings, sellerTag } = location.state;
    const [qty, setQty] = useState(1);
    const [totalPrice, setTotalPrice] = useState(price);

    //object state is made to handle form data
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
    console.log(pincode);
    const [error, setError] = useState("");

    //Function to handle change in form and setting values to getdata state
    const onChangeHandler = (event) => {
        setData({ ...getData, [event.target.name]: event.target.value })
    }

    //On submission of form this function first checks if , all fields are being filled properly ,then we are lead to product Buynowpaymet page
    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (!getData.pincode) {
            //setError("PIN code is mandatory")
            toast.error("PIN code is mandatory")
        }
        else if (!getData.firstname) {
            toast.error("First-name is mandatory")
        }
        else if (!getData.lastname) {
            toast.error("Last-name is mandatory")
        }
        else if (!getData.houseNo) {
            toast.error("Please enter house No.")
        }
        else if (!getData.colony) {
            toast.error("Please enter colony")
        }
        else if (!getData.landmark) {
            toast.error("Landmark is mandatory")
        }
        else if (!getData.city) {
            toast.error("Enter your city")
        }
        else if (!getData.state) {
            toast.error("Enter your state")
        }
        else if (!getData.mobile) {
            toast.error("Enter Your Mobile Number")
        }
        else if (getData.mobile && getData.mobile.length < 10) {
            toast.error("Please Enter a Valid Mobile Number")
        }

        else {
            console.log(getData);
            navigate("/buynowpayment", {
                state: {
                    displayImage, name, totalPrice, ratings, sellerTag, pincode, firstname, lastname, houseNo, colony, landmark, city, state, mobile, landline
                }
            })
            console.log({
                price

            });
        }
    }
    const qtyhandler = (e) => {
        setQty(e.target.value)
    }

    return (
        <>
            <>

            </>

            <div className='flex flex-col md:flex-row gap-x-4'>
                <div className='mt-5 md:ml-2'>
                    <div className='text-xl mt-4 font-semibold mr-4  md:ml-52 underline ml-2 md:mr-40 '>Order Summary <i className="fa-solid fa-box" style={{ color: "red" }}></i></div>
                    {/* 1. totalPrice is the state whose initial value is price
                   2. we send it to CheckOutCard
                   3. we also have price variable which we have recived from product detail page
                   4. totalPrice will be equal to price (totalPrice==price) if qty is 1
                   5. we are going to update totalPrice and qty in checkout card so we also sent functions to update it  through props 
                   6. totalPrice will be updated on change of qty (price * qty == totalPrice ) we used useEffect for this */}
                    <CheckOutCard
                        displayImage={displayImage}
                        totalPrice={totalPrice}
                        price={price}
                        setTotalPrice={setTotalPrice}
                        rating={ratings}
                        name={name}
                        qtyhandler={qtyhandler}
                        qty={qty}

                    />


                </div>

                <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg p-6 pt-2 space-y-6 mt-4 mb-20 md:ml-4 ml-2">
                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                            <strong className="font-bold">Error:</strong>
                            <span className="block sm:inline">{error}</span>
                        </div>
                    )}

                    <form onSubmit={onSubmitHandler} className='mr-8 ml-0 px-6'>
                        <div className='flex flex-col md:flex-row justify-between'>
                            <div className='text-xl mt-4 font-semibold ml-4 md:ml-24 underline'>Shipping Details <i className="fa-solid fa-truck" style={{ color: "blue" }}></i></div>

                        </div>
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
                                <input type="text" name="houseNo" id="house_flat" placeholder="House/Flat No." value={getData.houseNo} onChange={onChangeHandler} className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md m-4" />
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
                                <input type="tel" name="mobile" id="mobile" placeholder="Mobile No." minLength={10} maxLength={10} value={getData.mobile} onChange={onChangeHandler} className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md m-4" />
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


            </div>


        </>)
}

export default BuynowCheckoutPage