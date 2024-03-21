import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import CheckOutCard from "../components/CheckOutCard";

const CheckoutPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { getData, totalPrice } = location.state;

    const goToPaymentPage = () => {
        navigate("/paymentpage", {
            state: {
                totalPrice
            }
        })
        console.log({
            totalPrice

        });
    }
    return (<div className='mb-96'>
        <h1 className="text-center text-3xl md:text-4xl font-bold mb-8 underline mt-3 text-gray-600">Order Summary</h1>

        {Array.isArray(getData) && getData.map((obj) => {
            return <CheckOutCard
                displayImage={obj.product.displayImage}
                price={obj.product.price}
                rating={obj.product.ratings}
                name={obj.product.name}
                quantity={obj.quantity}
            />
        })}
        <div className='flex justify-center'><h1 className='text-xl md:text-2xl m-5'>Total Price: <span className='text-2xl md:text-4xl text-bold text-red-500'>{totalPrice}</span></h1></div>


        <div className="flex justify-center">
            <button onClick={goToPaymentPage} className="p-3 md:p-5 bg-red-600 w-72 md:w-96 hover:bg-blue-700 text-2xl md:text-4xl text-slate-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Confirm Order
            </button>
        </div>

    </div>)
}

export default CheckoutPage
// I've used Tailwind CSS classes to adjust the font sizes, margins, and padding for mobile screens (text-xl md:text-2xl, text-2xl md:text-4xl, m-5, p-3 md:p-5, etc.).
// The font size of the "Order Summary" heading has been adjusted using Tailwind's responsive text size utilities (text-3xl md:text-4xl).
// Similarly, the font size of the total price and the button have been adjusted for mobile screens using Tailwind's responsive text size utilities (text-2xl md:text-4xl).
// The padding of the button has been adjusted for mobile screens (p-3 md:p-5).