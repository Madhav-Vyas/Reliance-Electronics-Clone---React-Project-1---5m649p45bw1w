import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ShippingPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { displayImage, name, price, ratings, sellerTag } = location.state;
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
    const [error, setError] = useState("");
    const onChangeHandler = (event) => {
        setData({ ...getData, [event.target.name]: event.target.value })
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (!getData.pincode) {
            setError("PIN code is mandatory")
        }
        if (!getData.firstname) {
            setError("First-name is mandatory")
        }
        if (!getData.lastname) {
            setError("Last-name is mandatory")
        }
        if (!getData.houseNo) {
            setError("Please enter house No.")
        }
        if (!getData.colony) {
            setError("Please enter colony")
        }
        if (!getData.landmark) {
            setError("Landmark is mandatory")
        }
        if (!getData.city) {
            setError("Enter your city")
        }
        if (!getData.state) {
            setError("Enter your state")
        }
        if (!getData.mobile) {
            setError("Enter Your Mobile Number")
        }
        if (getData.mobile.length < 10) {
            setError("Enter valid mobile number < Dont include 0 or +91 > ")
        }
        console.log(getData);
        navigate("checkoutpageb", {
            state: {
                displayImage, name, price, ratings, sellerTag, getData
            }
        });

    }

    return (
        <>
            <div className='flex justify-center text-xl mt-4 font-semibold'> Shipping Details</div>
            <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg p-6 space-y-6 mt-10 mb-20">
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
                            <input type="tel" minLength={10} maxLength={10} name="mobile" id="mobile" placeholder="Mobile No." value={getData.mobile} onChange={onChangeHandler} className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md m-4" />
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
            </div>
        </>
    );
};

export default ShippingPage;
