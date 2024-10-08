
import React, { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import orderConfirmed from '../orderConfirmed.png';
const OrderSuccessPageb = () => {
    const continueShopping = () => {
        navigate("/");
    }
    const location = useLocation();

    const { totalPrice, pincode, firstname, lastname, houseNo, colony, landmark, city, state, mobile, landline, buyNowTotalPriceAfterQty } = location.state;
    const navigate = useNavigate();
    return (
        <>

            <div className='global flex flex-col md:flex-row justify-between'>
                <div className='left w-full md:w-3/5'>
                    <div className=''>
                        <img className='mt-8 mr-4 md:mx-8' src={orderConfirmed}></img>
                        <div className='text-slate-500 text-xs flex ml-6 mt-2'>Order with id #{Math.floor(Math.random() * 900000) + 100000} is placed and will reach you in 3-5 Business Days </div>
                        <button className="bg-slate-500 mt-20 w-44 mb-8 hover:bg-slate-700 text-white font-bold py-2 px-2 rounded ml-6" onClick={continueShopping}>Continue Shopping</button>


                    </div>
                </div>
                <div className='right w-full md:w-96 mt-8 md:mt-0 mr-2'>
                    <div className='bg-white h-auto md:h-80 p-4 rounded'>
                        <h1 className='text-lg font-semibold border-b-2'>Delivery Address</h1>
                        <span className='text-sm font-bold'>{firstname} {lastname}</span>
                        <p className='text-sm'>{houseNo}, {colony}, {landmark}</p>
                        <p className='text-sm'>{city}-{pincode}, {state}</p>
                        <h1 className='text-lg font-semibold mt-4 border-b-2'>Billing Address</h1>
                        <span className='text-sm font-bold'>{firstname} {lastname}</span>
                        <p className='text-sm'>{houseNo}, {colony}, {landmark}</p>
                        <p className='text-sm'>{city}-{pincode}, {state}</p>
                        <h1 className='text-lg font-semibold mt-4 border-b-2'>Contact details</h1>
                        <ul className='mt-2'>
                            <li className='text-sm'>Email Address: RelainceDigital@gmail.com</li>
                            <li className='text-sm'>Contact No: 9213459012</li>
                        </ul>
                    </div>
                    <div className='bg-white h-auto md:h-44 my-6 p-4 rounded'>
                        <h1 className='text-lg font-semibold mt-1 border-b-2'>Order Summary</h1>
                        <div className='mt-2'>
                            <div className='flex justify-between'>
                                <p className='font-semibold'>Sub-total: </p>
                                <p>{buyNowTotalPriceAfterQty}</p>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <div className='flex justify-between'>
                                <p className='text-sm'>Delivery Charges: </p>
                                <p className='text-green-600'><i className='fa-solid fa-truck-fast'></i> FREE</p>
                            </div>
                            <div className='mt-4 border-t-2 flex justify-between'>
                                <p className='text-sm'>Total </p>
                                <p className="">{buyNowTotalPriceAfterQty}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OrderSuccessPageb
// flex-col md:flex-row is used to change the layout direction based on the screen size.
// Width classes like w-full and w-3/5 are added to adjust the width of the left and right sections.
// Height classes like h-auto and h-80 are used to adjust the height of certain sections.
// Margin classes like mt-8, mb-8, mt-20, etc., are added to adjust spacing between elements.
// Border classes like border-b-2 are used to add borders to certain elements.
// Text alignment and font size classes like text-lg, text-sm, text-xs, etc., are used to style text appropriately.