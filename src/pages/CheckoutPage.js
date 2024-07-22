import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import CheckOutCardCart from '../components/CheckOutCardCart';
import { toast } from 'react-toastify';
import { useData } from "../Providers/AllcategoryData";

const CheckoutPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    //data varible contains the array of products which are added in cart and total price contains the sum of prices of all products
    const { totalPrice } = location.state;
    const { data, datahandler } = useData();
    //get data is state made to handle form on checkout page
    const [getDetail, setDetail] = useState({
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


    //we have destructured this data in order to send it to next page
    const { pincode, firstname, lastname, houseNo, colony, landmark, city, state, mobile, landline } = getDetail;
    const [error, setError] = useState("");
    const onChangeHandler = (event) => {
        setDetail({ ...getDetail, [event.target.name]: event.target.value })
    }

    //on submit  we are redirected to next page i.e(payment page) before that on submission this function is called and this function checks that if all details of for are being filled or not if not filled an error state will be set

    //and if there is no error we are redirected to payment page along with required details
    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (!getDetail.pincode) {
            toast.error("PIN code is mandatory")
        }
        else if (!getDetail.firstname) {
            toast.error("First-name is mandatory")
        }
        else if (!getDetail.lastname) {
            toast.error("Last-name is mandatory")
        }
        else if (!getDetail.houseNo) {
            toast.error("Please enter house No.")
        }
        else if (!getDetail.colony) {
            toast.error("Please enter colony")
        }
        else if (!getDetail.landmark) {
            toast.error("Landmark is mandatory")
        }
        else if (!getDetail.city) {
            toast.error("Enter your city")
        }
        else if (!getDetail.state) {
            toast.error("Enter your state")
        }
        else if (!getDetail.mobile) {
            toast.error("Enter Your Mobile Number")
        }

        else if (getDetail.mobile && getDetail.mobile.length < 10) {
            toast.error("Please Enter a Valid Mobile Number")
        }

        else {
            console.log(getDetail);
            navigate("/paymentpage", {
                state: {
                    totalPrice, pincode, firstname, lastname, houseNo, colony, landmark, city, state, mobile, landline
                }
            })
            console.log({
                data,
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

        <>

        </>
        <div className='flex flex-col md:flex-row gap-x-4'>
            <div className='mb-12 md:mb-96 ml-2 md:ml-2'>
                <div className='text-xl font-semibold mr-4 md:mt-8 md:ml-52 underline mt-2'>Order Summary <i className="fas fa-box" style={{ color: "red" }}></i></div>
                {Array.isArray(data) && data.map((obj) => {
                    return (
                        <CheckOutCardCart
                            key={obj.product.id}
                            displayImage={obj.product.displayImage}
                            price={obj.product.price}
                            rating={obj.product.ratings}
                            name={obj.product.name}
                            quantity={obj.quantity}
                        />
                    );
                })}
            </div>


            <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg p-6 pt-2 space-y-6 mt-4 mb-20 md:ml-4 ml-2">
                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='text-xl mt-1 font-semibold ml-2 md:ml-32 md:mt-1 underline'>Shipping Details <i className="fas fa-truck" style={{ color: "blue" }}></i></div>

                </div>
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">Error:</strong>
                        <span className="block sm:inline">{error}</span>
                    </div>
                )}

                <form onSubmit={onSubmitHandler} className='mr-8'>
                    {/* Pincode */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <input type="text" name="pincode" id="pincode" placeholder="Pincode" value={getDetail.pincode} onChange={onChangeHandler} className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md m-4" />
                        </div>
                    </div>
                    {/* First Name and Last Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="col-span-2 sm:col-span-1">
                            <input type="text" name="firstname" id="first_name" placeholder="First Name" value={getDetail.firstname} onChange={onChangeHandler} className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md m-4" />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <input type="text" name="lastname" id="last_name" placeholder="Last Name" value={getDetail.lastname} onChange={onChangeHandler} className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md m-4" />
                        </div>
                    </div>
                    {/* House/Flat No. and Colony/Street */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="col-span-2 sm:col-span-1">
                            <input type="text" name="houseNo" id="house_flat" placeholder="House/Flat No." value={getDetail.houseNo} onChange={onChangeHandler} className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md m-4" />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <input type="text" name="colony" id="colony_street" placeholder="Colony/Street" value={getDetail.colony} onChange={onChangeHandler} className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md m-4" />
                        </div>
                    </div>
                    {/* Landmark */}
                    <div>
                        <input type="text" name="landmark" id="landmark" placeholder="Landmark" value={getDetail.landmark} onChange={onChangeHandler} className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md m-4" />
                    </div>
                    {/* City and State */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="col-span-2 sm:col-span-1">
                            <input type="text" name="city" id="city" placeholder="City" value={getDetail.city} onChange={onChangeHandler} className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md m-4" />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <input type="text" name="state" id="state" placeholder="State" value={getDetail.state} onChange={onChangeHandler} className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md m-4" />
                        </div>
                    </div>
                    {/* Mobile No. and Landline No. */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="col-span-2 sm:col-span-1">
                            <input type="tel" minLength={10} maxLength={10} name="mobile" id="mobile" placeholder="Mobile No." value={getDetail.mobile} onChange={onChangeHandler} className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md m-4"
                                pattern="[0-9]{3}[0-9]{3}[0-9]{4}" />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <input type="tel" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" name="landline" id="landline" placeholder="Landline No." value={getDetail.landline} onChange={onChangeHandler} className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md m-4" />
                        </div>
                    </div>
                    {/* Submit Button */}
                    <div>
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 m-4">
                            Submit
                        </button>
                    </div>
                </form>
                <div className='text-red-600 text-xs'>*don't add 0 or +91 in start of mobile number</div>
            </div>


        </div>

    </>)
}

export default CheckoutPage
// I've used Tailwind CSS classes to adjust the font sizes, margins, and padding for mobile screens (text-xl md:text-2xl, text-2xl md:text-4xl, m-5, p-3 md:p-5, etc.).
// The font size of the "Order Summary" heading has been adjusted using Tailwind's responsive text size utilities (text-3xl md:text-4xl).
// Similarly, the font size of the total price and the button have been adjusted for mobile screens using Tailwind's responsive text size utilities (text-2xl md:text-4xl).
// The padding of the button has been adjusted for mobile screens (p-3 md:p-5).